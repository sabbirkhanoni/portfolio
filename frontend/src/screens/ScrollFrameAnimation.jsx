import React, { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 240;
const FRAME_PATH = (n) =>
  `/camera_frames/camera_frames_24fps/frame_${String(n).padStart(4, '0')}.png`;

// ─── Preload all frames ────────────────────────────────────────────────────────
const images = new Array(TOTAL_FRAMES);
let loadedCount = 0;

function preloadFrames(onProgress) {
  for (let i = 0; i < TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = FRAME_PATH(i + 1);
    img.onload = () => {
      loadedCount++;
      if (onProgress) onProgress(loadedCount / TOTAL_FRAMES);
    };
    images[i] = img;
  }
}

// ─── Component ─────────────────────────────────────────────────────────────────
const ScrollFrameAnimation = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);

  const [loadProgress, setLoadProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // ── Draw a specific frame ──────────────────────────────────────────────────
  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = images[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Cover-fit
    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const dx = (cw - sw) / 2;
    const dy = (ch - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, sw, sh);
  }, []);

  // ── Smooth interpolation loop ──────────────────────────────────────────────
  const animationLoop = useCallback(() => {
    const diff = targetFrameRef.current - currentFrameRef.current;
    if (Math.abs(diff) > 0.1) {
      currentFrameRef.current += diff * 0.12; // easing factor
      drawFrame(Math.round(currentFrameRef.current));
    }
    rafRef.current = requestAnimationFrame(animationLoop);
  }, [drawFrame]);

  // ── Resize canvas to fill container ───────────────────────────────────────
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    drawFrame(Math.round(currentFrameRef.current));
  }, [drawFrame]);

  // ── Scroll handler ────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const viewH = window.innerHeight;

      // progress: 0 → 1 across the sticky scroll range
      const scrolled = -rect.top;
      const scrollRange = sectionH - viewH;
      const progress = Math.max(0, Math.min(1, scrolled / scrollRange));

      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Resize observer ───────────────────────────────────────────────────────
  useEffect(() => {
    const ro = new ResizeObserver(resizeCanvas);
    if (canvasRef.current) ro.observe(canvasRef.current);
    resizeCanvas();
    return () => ro.disconnect();
  }, [resizeCanvas]);

  // ── Start animation loop ───────────────────────────────────────────────────
  useEffect(() => {
    rafRef.current = requestAnimationFrame(animationLoop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animationLoop]);

  // ── Preload frames ────────────────────────────────────────────────────────
  useEffect(() => {
    preloadFrames((p) => {
      setLoadProgress(p);
      if (p >= 1) setIsReady(true);
    });
    // Draw first frame immediately even before full load
    drawFrame(0);
  }, [drawFrame]);

  return (
    /**
     * The outer section is TALL (e.g. 600vh) so the user scrolls through it.
     * The inner sticky div stays fixed in the viewport the entire time.
     */
    <section
      ref={sectionRef}
      style={{
        height: '600vh',
        position: 'relative',
        /* Full-viewport breakout from the container's max-width */
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
      }}
      aria-label="Scroll animation sequence"
    >
      {/* Sticky viewport wrapper */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          background: '#000',
        }}
      >
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Loading overlay */}
        {!isReady && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.85)',
              zIndex: 10,
              gap: '1.5rem',
            }}
          >
            {/* Spinner ring */}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                border: '3px solid rgba(255,255,255,0.1)',
                borderTopColor: '#33c2cc',
                animation: 'spin 0.8s linear infinite',
              }}
            />

            {/* Progress bar */}
            <div
              style={{
                width: '220px',
                height: '4px',
                borderRadius: '9999px',
                background: 'rgba(255,255,255,0.1)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${Math.round(loadProgress * 100)}%`,
                  background: 'linear-gradient(90deg, #33c2cc, #57db96)',
                  borderRadius: '9999px',
                  transition: 'width 0.2s ease',
                }}
              />
            </div>

            <p
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.78rem',
                letterSpacing: '0.08em',
                fontFamily: 'inherit',
              }}
            >
              Loading animation… {Math.round(loadProgress * 100)}%
            </p>
          </div>
        )}

        {/* Scroll hint — fades out after first frame leaves 0 */}
        <div
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            pointerEvents: 'none',
            opacity: loadProgress >= 1 ? 1 : 0,
            transition: 'opacity 0.6s ease',
            animation: 'scrollHintFade 3s ease forwards',
          }}
        >
          <span
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Scroll to explore
          </span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
              animation: 'scrollLine 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes scrollLine {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.15); }
        }
        @keyframes scrollHintFade {
          0%   { opacity: 1; }
          60%  { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default ScrollFrameAnimation;
