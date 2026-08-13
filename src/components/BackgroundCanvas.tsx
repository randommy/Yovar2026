import React, { useEffect, useRef } from 'react';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes representing convergent thinking pathways
    const particleCount = Math.min(45, Math.floor(width / 28));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.5 + 1,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let time = 0;

    const render = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Deep dark canvas #050505 with electric blue ambient radial glows
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Top Right Blue Ambient Glow (#1a3a5a)
      const glowRight = ctx.createRadialGradient(
        width * 0.9,
        height * 0.1,
        20,
        width * 0.9,
        height * 0.1,
        width * 0.55
      );
      glowRight.addColorStop(0, 'rgba(26, 58, 90, 0.35)');
      glowRight.addColorStop(1, 'rgba(5, 5, 5, 0)');
      ctx.fillStyle = glowRight;
      ctx.fillRect(0, 0, width, height);

      // Bottom Left Dark Purple Ambient Glow (#2a1a3a)
      const glowLeft = ctx.createRadialGradient(
        width * 0.1,
        height * 0.9,
        20,
        width * 0.1,
        height * 0.9,
        width * 0.5
      );
      glowLeft.addColorStop(0, 'rgba(42, 26, 58, 0.3)');
      glowLeft.addColorStop(1, 'rgba(5, 5, 5, 0)');
      ctx.fillStyle = glowLeft;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle convergent wave paths in Electric Blue #4A90E2
      ctx.lineWidth = 1;

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        const startY = (height / 6) * (i + 1);
        ctx.moveTo(0, startY);

        const cp1x = width * 0.25;
        const cp1y = startY + Math.sin(time + i) * 50;
        const cp2x = width * 0.75;
        const cp2y = startY - Math.cos(time + i) * 50;

        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, width, startY);

        const gradient = ctx.createLinearGradient(0, startY, width, startY);
        gradient.addColorStop(0, 'rgba(74, 144, 226, 0.02)');
        gradient.addColorStop(0.5, 'rgba(74, 144, 226, 0.07)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.02)');

        ctx.strokeStyle = gradient;
        ctx.stroke();
      }

      // Render nodes & dynamic connections
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 144, 226, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(74, 144, 226, ${(1 - dist / 120) * 0.12})`;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
};
