import React, { useEffect, useRef } from 'react';

interface RealisticEmber {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;
  length: number;
  alpha: number;
  maxAlpha: number;
  life: number;
  maxLife: number;
  swayFreq: number;
  swayAmp: number;
  swayPhase: number;
  flickerFreq: number;
  flickerPhase: number;
  temp: number; // 1.0 = White hot, 0.7 = Yellow, 0.4 = Orange, 0.1 = Red
}

export const EmberCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const sparks: RealisticEmber[] = [];
    const sparkDensity = Math.min(Math.floor((width * height) / 9000), 100);

    const createSpark = (fromBottom = true): RealisticEmber => {
      const isBurst = Math.random() < 0.25; // 25% fast micro-sparks
      const maxLife = Math.random() * 200 + 120; // Frames to live

      return {
        x: Math.random() * width,
        y: fromBottom ? height + Math.random() * 15 : Math.random() * height,
        speedX: (Math.random() - 0.5) * (isBurst ? 0.8 : 0.35),
        speedY: (Math.random() * (isBurst ? 2.2 : 1.2) + 0.6) * -1,
        size: isBurst ? Math.random() * 0.6 + 0.3 : Math.random() * 1.1 + 0.5,
        length: isBurst ? Math.random() * 8 + 4 : Math.random() * 4 + 1.5,
        alpha: fromBottom ? 0.05 : Math.random() * 0.8,
        maxAlpha: Math.random() * 0.75 + 0.25,
        life: fromBottom ? 0 : Math.random() * maxLife,
        maxLife,
        swayFreq: Math.random() * 0.025 + 0.008,
        swayAmp: Math.random() * 1.2 + 0.2,
        swayPhase: Math.random() * Math.PI * 2,
        flickerFreq: Math.random() * 0.2 + 0.08,
        flickerPhase: Math.random() * Math.PI * 2,
        temp: 1.0 // Starts white-hot
      };
    };

    for (let i = 0; i < sparkDensity; i++) {
      sparks.push(createSpark(false));
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Natural Thermal Glow Gradient at the base
      const glowGrad = ctx.createLinearGradient(0, height - 120, 0, height);
      glowGrad.addColorStop(0, 'rgba(0,0,0,0)');
      glowGrad.addColorStop(0.6, 'rgba(227, 6, 19, 0.08)');
      glowGrad.addColorStop(0.9, 'rgba(255, 85, 0, 0.22)');
      glowGrad.addColorStop(1, 'rgba(255, 175, 0, 0.38)');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, height - 120, width, 120);

      // Enable Additive Blending for Photorealistic Incandescence
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];

        s.life += 1;
        const lifeRatio = s.life / s.maxLife;

        // Thermal cooling as spark rises
        s.temp = Math.max(0, 1.0 - lifeRatio * 1.2);

        // Natural thermal sway
        s.swayPhase += s.swayFreq;
        const sway = Math.sin(s.swayPhase) * s.swayAmp;

        // Rapid combustion flickering
        s.flickerPhase += s.flickerFreq;
        const flicker = 0.75 + Math.sin(s.flickerPhase) * 0.25;

        // Mouse gentle wind drift
        const dx = s.x - mouseX;
        const dy = s.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let windX = 0;
        if (dist < 160) {
          windX = (dx / dist) * (160 - dist) * 0.015;
        }

        s.y += s.speedY;
        s.x += s.speedX + sway * 0.25 + windX;

        // Smooth Opacity Envelope
        let opacity = s.maxAlpha * flicker;
        if (lifeRatio < 0.15) {
          opacity *= lifeRatio / 0.15; // Fade in
        } else if (lifeRatio > 0.65) {
          opacity *= (1.0 - lifeRatio) / 0.35; // Fade out
        }

        if (opacity <= 0.01 || s.y < -20) {
          sparks[i] = createSpark(true);
          continue;
        }

        // Color based on temperature cooling
        let coreColor = '#FFFFFF';
        let glowColor = 'rgba(255, 85, 0, 0.6)';

        if (s.temp > 0.7) {
          coreColor = '#FFFDF0'; // White-hot
          glowColor = 'rgba(255, 200, 80, 0.8)';
        } else if (s.temp > 0.4) {
          coreColor = '#FFC837'; // Golden yellow
          glowColor = 'rgba(255, 100, 0, 0.7)';
        } else {
          coreColor = '#FF4500'; // Orange red
          glowColor = 'rgba(227, 6, 19, 0.5)';
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, opacity));

        // Razor thin spark streak line
        const tailX = s.x - s.speedX * (s.length * 0.5);
        const tailY = s.y - s.speedY * (s.length * 0.8);

        const sparkGrad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        sparkGrad.addColorStop(0, 'rgba(0,0,0,0)');
        sparkGrad.addColorStop(0.5, glowColor);
        sparkGrad.addColorStop(1, coreColor);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = sparkGrad;
        ctx.lineWidth = s.size;
        ctx.lineCap = 'round';
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = s.size * 4;
        ctx.stroke();

        // Pinpoint hot core
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = coreColor;
        ctx.fill();

        ctx.restore();
      }

      // Reset blending mode
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-10 ${className}`}
    />
  );
};
