"use client";

import { useEffect, useRef } from "react";

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    const mouse = { x: -9999, y: -9999 };

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      max: number;
      size: number;
      tone: number;
    };

    let particles: Particle[] = [];
    const palette = ["200,255,77", "255,92,53", "244,240,230"];

    const spawn = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0,
      vy: 0,
      life: 0,
      max: 220 + Math.random() * 420,
      size: 0.5 + Math.random() * 1.35,
      tone: Math.floor(Math.random() * palette.length),
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = width < 760 ? 80 : 210;
      particles = Array.from({ length: count }, spawn);
      if (reduce) drawStatic();
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.9, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${palette[p.tone]},0.28)`;
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (const p of particles) {
        const angle =
          Math.sin(p.x * 0.0022 + time * 0.00012) * 1.75 +
          Math.cos(p.y * 0.0028 - time * 0.00009) * 1.35;

        p.vx += Math.cos(angle) * 0.014;
        p.vy += Math.sin(angle) * 0.014;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < 32400 && dist2 > 0.01) {
          const dist = Math.sqrt(dist2);
          const force = (1 - dist / 180) * 0.42;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.vx *= 0.955;
        p.vy *= 0.955;
        p.x += p.vx;
        p.y += p.vy;
        p.life += 1;

        const fade = Math.sin(Math.PI * Math.min(1, p.life / p.max));
        const alpha = 0.07 + fade * 0.36;

        ctx.beginPath();
        ctx.moveTo(p.x - p.vx * 5, p.y - p.vy * 5);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = `rgba(${palette[p.tone]},${alpha})`;
        ctx.lineWidth = p.size;
        ctx.stroke();

        if (
          p.life > p.max ||
          p.x < -40 ||
          p.x > width + 40 ||
          p.y < -40 ||
          p.y > height + 40
        ) {
          Object.assign(p, spawn());
        }
      }

      ctx.globalCompositeOperation = "source-over";
      if (visible) frame = requestAnimationFrame(draw);
    };

    const onMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const onVisibility = () => {
      visible = !document.hidden;
      if (visible && !reduce) frame = requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    if (!reduce) frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />;
}
