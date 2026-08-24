"use client";

import { useRef, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  }

  return (
    <div className="home-video-wrap" data-reveal="zoom-out-left">
      <video
        ref={videoRef}
        className="home-video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onPause={() => setPaused(true)}
        onPlay={() => setPaused(false)}
      >
        <source src="/media/original.mp4" type="video/mp4" />
      </video>
      <button
        className="video-toggle"
        type="button"
        onClick={togglePlayback}
        aria-label={paused ? "Video abspielen" : "Video pausieren"}
      >
        {paused ? (
          <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="none" stroke="currentColor" strokeWidth="4" /><path d="m26 20 20 12-20 12Z" fill="currentColor" /></svg>
        ) : (
          <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="none" stroke="currentColor" strokeWidth="4" /><path d="M24 20h6v24h-6zm10 0h6v24h-6z" fill="currentColor" /></svg>
        )}
      </button>
    </div>
  );
}
