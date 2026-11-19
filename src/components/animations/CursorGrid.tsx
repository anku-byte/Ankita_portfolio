'use client';

import React, { useEffect, useRef, useState, type CSSProperties, type HTMLAttributes } from 'react';

export type GridFalloff = 'linear' | 'smooth' | 'sharp';
export type GridHighlight = 'area' | 'cell';
export type GridStyle = 'lines' | 'dashed' | 'dots' | 'crosses';

export interface CursorGridProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'color'> {
  cellSize?: number;
  color?: string;
  gridColor?: string;
  radius?: number;
  falloff?: GridFalloff;
  highlight?: GridHighlight;
  holdTime?: number;
  fadeDuration?: number;
  lineWidth?: number;
  maxOpacity?: number;
  fillOpacity?: number;
  gridOpacity?: number;
  gridStyle?: GridStyle;
  cellRadius?: number;
  cellGap?: number;
  spotlight?: number;
  clickPulse?: boolean;
  pulseSpeed?: number;
  ambient?: number;
  edgeFade?: number;
  intro?: boolean;
  lightMode?: boolean;
  dpr?: number;
  className?: string;
  style?: CSSProperties;
}

interface PulseWave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  intensity: number;
}

export default function CursorGrid({
  cellSize = 38,
  color = '#E5CD82',
  gridColor = '#728E6D',
  radius = 160,
  falloff = 'smooth',
  highlight = 'cell',
  holdTime = 250,
  fadeDuration = 700,
  lineWidth = 1,
  maxOpacity = 0.65,
  fillOpacity = 0.2,
  gridOpacity = 0.28,
  gridStyle = 'lines',
  cellRadius = 4,
  cellGap = 2,
  spotlight = 0.35,
  clickPulse = true,
  pulseSpeed = 6,
  ambient = 0.04,
  edgeFade = 0.25,
  intro = true,
  dpr,
  className = '',
  style = {},
  ...props
}: CursorGridProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;

    // Mouse coordinates
    let mouseX = -9999;
    let mouseY = -9999;
    let targetMouseX = -9999;
    let targetMouseY = -9999;
    let isMouseActive = false;

    // Decayed cell intensity buffer
    // cellBuffer[row * cols + col] = { intensity: number, lastSeen: number }
    let cellBuffer: Float32Array;
    let cellLastSeen: Float32Array;

    // Click pulse waves
    const pulses: PulseWave[] = [];

    // Parse color to RGB
    const parseRgb = (hexOrRgb: string): [number, number, number] => {
      if (hexOrRgb.startsWith('#')) {
        let hex = hexOrRgb.slice(1);
        if (hex.length === 3) {
          hex = hex.split('').map((c) => c + c).join('');
        }
        const num = parseInt(hex, 16);
        return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
      }
      const match = hexOrRgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        return [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)];
      }
      return [229, 205, 130]; // default gold
    };

    const activeRgb = parseRgb(color);
    const baseGridRgb = parseRgb(gridColor);

    const resize = () => {
      const parent = containerRef.current || canvas.parentElement || document.body;
      const rect = parent.getBoundingClientRect();
      const pixelRatio = dpr || Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform?.();
      ctx.scale(pixelRatio, pixelRatio);

      cols = Math.ceil(width / cellSize) + 1;
      rows = Math.ceil(height / cellSize) + 1;
      const totalCells = cols * rows;

      cellBuffer = new Float32Array(totalCells);
      cellLastSeen = new Float32Array(totalCells);
    };

    resize();
    window.addEventListener('resize', resize);

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
      if (mouseX === -9999) {
        mouseX = targetMouseX;
        mouseY = targetMouseY;
      }
      isMouseActive = true;
    };

    const handlePointerLeave = () => {
      targetMouseX = -9999;
      targetMouseY = -9999;
      isMouseActive = false;
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickPulse) return;
      const rect = canvas.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;

      pulses.push({
        x: px,
        y: py,
        radius: 0,
        maxRadius: Math.max(width, height) * 0.75,
        intensity: 1.0,
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    if (clickPulse) {
      window.addEventListener('click', handleClick, { passive: true });
    }

    // Falloff calculation function
    const calcFalloff = (dist: number, maxDist: number): number => {
      if (dist >= maxDist) return 0;
      const norm = dist / maxDist;
      if (falloff === 'sharp') {
        return Math.pow(1 - norm, 3);
      }
      if (falloff === 'smooth') {
        // cosine smoothstep
        return 0.5 * (1 + Math.cos(norm * Math.PI));
      }
      return 1 - norm; // linear
    };

    let lastTime = performance.now();

    const drawRoundedRect = (
      x: number,
      y: number,
      w: number,
      h: number,
      r: number
    ) => {
      if (r <= 0) {
        ctx.rect(x, y, w, h);
        return;
      }
      const radius = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + w - radius, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
      ctx.lineTo(x + w, y + h - radius);
      ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
      ctx.lineTo(x + radius, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    };

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth mouse lerp
      if (isMouseActive) {
        mouseX += (targetMouseX - mouseX) * Math.min(dt * 18, 1);
        mouseY += (targetMouseY - mouseY) * Math.min(dt * 18, 1);
      } else {
        mouseX = -9999;
        mouseY = -9999;
      }

      ctx.clearRect(0, 0, width, height);

      // Advance pulse waves
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.radius += pulseSpeed * 60 * dt;
        pulse.intensity = Math.max(0, 1 - pulse.radius / pulse.maxRadius);
        if (pulse.intensity <= 0 || pulse.radius >= pulse.maxRadius) {
          pulses.splice(p, 1);
        }
      }

      const effectiveRadius = radius;
      const decayRate = dt * (1000 / fadeDuration);

      // Iterate over cells
      for (let r = 0; r < rows; r++) {
        const y = r * cellSize;
        for (let c = 0; c < cols; c++) {
          const x = c * cellSize;
          const idx = r * cols + c;
          const centerX = x + cellSize / 2;
          const centerY = y + cellSize / 2;

          let targetIntensity = ambient;

          // Distance to cursor
          if (isMouseActive) {
            const dx = centerX - mouseX;
            const dy = centerY - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < effectiveRadius) {
              const curIntensity = calcFalloff(dist, effectiveRadius);
              targetIntensity = Math.max(targetIntensity, curIntensity);
            }
          }

          // Distance to click pulses
          for (let p = 0; p < pulses.length; p++) {
            const pulse = pulses[p];
            const dx = centerX - pulse.x;
            const dy = centerY - pulse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const distToWave = Math.abs(dist - pulse.radius);
            const waveWidth = 45;
            if (distToWave < waveWidth) {
              const waveIntensity = (1 - distToWave / waveWidth) * pulse.intensity;
              targetIntensity = Math.max(targetIntensity, waveIntensity);
            }
          }

          // Decay & update
          let cur = cellBuffer[idx] || 0;
          if (targetIntensity > cur) {
            cur = targetIntensity;
            cellLastSeen[idx] = time;
          } else {
            const timeSinceSeen = time - (cellLastSeen[idx] || 0);
            if (timeSinceSeen > holdTime) {
              cur = Math.max(ambient, cur - decayRate);
            }
          }
          cellBuffer[idx] = cur;

          // Compute cell alpha
          const activeRatio = Math.min(1, Math.max(0, cur));
          const lineAlpha = (gridOpacity + activeRatio * (maxOpacity - gridOpacity)).toFixed(3);

          const rColor = Math.round(baseGridRgb[0] + (activeRgb[0] - baseGridRgb[0]) * activeRatio);
          const gColor = Math.round(baseGridRgb[1] + (activeRgb[1] - baseGridRgb[1]) * activeRatio);
          const bColor = Math.round(baseGridRgb[2] + (activeRgb[2] - baseGridRgb[2]) * activeRatio);

          const innerW = cellSize - cellGap;
          const innerH = cellSize - cellGap;
          const innerX = x + cellGap / 2;
          const innerY = y + cellGap / 2;

          // 1. Fill highlight if cell is active
          if (activeRatio > ambient + 0.05 && fillOpacity > 0) {
            const fillA = (activeRatio * fillOpacity * maxOpacity).toFixed(3);
            ctx.fillStyle = `rgba(${activeRgb[0]}, ${activeRgb[1]}, ${activeRgb[2]}, ${fillA})`;
            drawRoundedRect(innerX, innerY, innerW, innerH, cellRadius);
            ctx.fill();
          }

          // 2. Draw Grid structure
          ctx.strokeStyle = `rgba(${rColor}, ${gColor}, ${bColor}, ${lineAlpha})`;
          ctx.lineWidth = lineWidth;

          if (gridStyle === 'lines') {
            drawRoundedRect(innerX, innerY, innerW, innerH, cellRadius);
            ctx.stroke();
          } else if (gridStyle === 'dots') {
            const dotRadius = Math.max(1, (lineWidth * 1.5) * (0.8 + activeRatio * 1.2));
            ctx.fillStyle = `rgba(${rColor}, ${gColor}, ${bColor}, ${lineAlpha})`;
            ctx.beginPath();
            ctx.arc(centerX, centerY, dotRadius, 0, Math.PI * 2);
            ctx.fill();
          } else if (gridStyle === 'crosses') {
            const crossSize = Math.max(2, cellSize * 0.18);
            ctx.beginPath();
            ctx.moveTo(centerX - crossSize, centerY);
            ctx.lineTo(centerX + crossSize, centerY);
            ctx.moveTo(centerX, centerY - crossSize);
            ctx.lineTo(centerX, centerY + crossSize);
            ctx.stroke();
          }
        }
      }

      // Cursor Ambient Spotlight Glow
      if (isMouseActive && spotlight > 0) {
        const grad = ctx.createRadialGradient(
          mouseX,
          mouseY,
          0,
          mouseX,
          mouseY,
          effectiveRadius * 1.2
        );
        grad.addColorStop(0, `rgba(${activeRgb[0]}, ${activeRgb[1]}, ${activeRgb[2]}, ${(spotlight * 0.18).toFixed(3)})`);
        grad.addColorStop(0.5, `rgba(${activeRgb[0]}, ${activeRgb[1]}, ${activeRgb[2]}, ${(spotlight * 0.06).toFixed(3)})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      // Edge Vignette / Edge Fade
      if (edgeFade > 0) {
        const edgeGrad = ctx.createRadialGradient(
          width / 2,
          height / 2,
          Math.min(width, height) * 0.4,
          width / 2,
          height / 2,
          Math.max(width, height) * 0.72
        );
        edgeGrad.addColorStop(0, 'rgba(0,0,0,0)');
        edgeGrad.addColorStop(1, `rgba(14, 37, 8, ${(edgeFade * 0.85).toFixed(2)})`);
        ctx.fillStyle = edgeGrad;
        ctx.fillRect(0, 0, width, height);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      if (clickPulse) {
        window.removeEventListener('click', handleClick);
      }
    };
  }, [
    cellSize,
    color,
    gridColor,
    radius,
    falloff,
    highlight,
    holdTime,
    fadeDuration,
    lineWidth,
    maxOpacity,
    fillOpacity,
    gridOpacity,
    gridStyle,
    cellRadius,
    cellGap,
    spotlight,
    clickPulse,
    pulseSpeed,
    ambient,
    edgeFade,
    dpr,
  ]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden w-full h-full select-none ${className}`}
      style={style}
      {...props}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
