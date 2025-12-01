"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/helpingCompo/container";
import Image from "next/image";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/sectionHeading/page";

export default function SpotifyPlayer() {
  const audioRef = useRef(null);
  const rafRef = useRef(null);

  const trackRef = useRef(null); // track DOM for measuring
  const thumbRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // persisted "has shown loader once" so loader runs only once ever (localStorage)
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  // show timeline (middle + slider) after first play and keep visible forever
  const [showTimeline, setShowTimeline] = useState(false);

  // audio time states
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0); // 0 - 1

  // dragging
  const draggingRef = useRef(false);

  // On mount: create audio & read localStorage for loader
  useEffect(() => {
    // create single audio instance
    audioRef.current = new Audio("/SpotiSong/song.mp3");
    audioRef.current.preload = "metadata";

    const audio = audioRef.current;

    const onLoadedMetadata = () => {
      setDuration(isFinite(audio.duration) ? audio.duration : 0);
    };

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
    };

    const onEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    // read localStorage for one-time loader
    try {
      const persisted = localStorage.getItem("spotify_loader_shown");
      if (persisted === "true") {
        setHasLoadedOnce(true);
      }
    } catch (e) {
      // ignore localStorage errors (SSR safety)
    }

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  // keep UI progress in sync using rAF when playing (smoother)
  useEffect(() => {
    const tick = () => {
      if (!audioRef.current) return;
      setCurrentTime(audioRef.current.currentTime);
      setProgress(audioRef.current.duration ? audioRef.current.currentTime / audioRef.current.duration : 0);
      rafRef.current = requestAnimationFrame(tick);
    };

    if (isPlaying) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying]);

  const persistLoaderShown = () => {
    try {
      localStorage.setItem("spotify_loader_shown", "true");
    } catch (e) {
      // ignore
    }
  };

  // handle play/pause with one-time loader & timeline show
  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // First time clicking: ensure timeline becomes visible and stays visible forever
    if (!showTimeline) {
      setShowTimeline(true);
    }

    // if currently playing -> pause
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    // if we've already shown loader once (persisted), play immediately
    if (hasLoadedOnce) {
      audio.play().catch(() => {});
      setIsPlaying(true);
      return;
    }

    // Otherwise: run loader once, then play
    setIsLoading(true);

    // small safety: if audio not loaded, call load()
    try {
      audio.load();
    } catch (e) {}

    // Show loader for 0.5s (user requested 0.5s earlier) then play
    setTimeout(() => {
      audio.play().catch(() => {});
      setIsPlaying(true);
      setIsLoading(false);
      setHasLoadedOnce(true);
      persistLoaderShown();
    }, 500);
  };

  // Format seconds to m:ss
  const formatTime = (s) => {
    if (!s || !isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  // Seek logic: set audio.currentTime and update progress
  const seekTo = (newTime) => {
    const audio = audioRef.current;
    if (!audio || !isFinite(newTime)) return;
    audio.currentTime = Math.min(Math.max(newTime, 0), audio.duration || newTime);
    setCurrentTime(audio.currentTime);
    setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
  };

  // Utility: convert clientX -> time using track bounding box
  const clientXToTime = (clientX) => {
    const track = trackRef.current;
    const audio = audioRef.current;
    if (!track || !audio) return 0;
    const rect = track.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const pct = rect.width === 0 ? 0 : x / rect.width;
    return (audio.duration || 0) * pct;
  };

  // Pointer events for dragging & seeking
  useEffect(() => {
    const onPointerMove = (e) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      const newTime = clientXToTime(e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX));
      seekTo(newTime);
    };

    const onPointerUp = (e) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      // if the audio should be playing after seek, keep playing; otherwise do nothing
      // (we don't change play state here)
      // remove pointer capture
      try {
        if (thumbRef.current && thumbRef.current.releasePointerCapture) {
          thumbRef.current.releasePointerCapture(e.pointerId);
        }
      } catch (err) {}
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
    };

    // attach on demand in pointerdown handler
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
    };
  }, []);

  // Start dragging
  const onThumbPointerDown = (e) => {
    e.preventDefault();
    draggingRef.current = true;
    // capture pointer if available
    try {
      if (thumbRef.current && thumbRef.current.setPointerCapture) {
        thumbRef.current.setPointerCapture(e.pointerId);
      }
    } catch (err) {}
    const clientX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX);
    const newTime = clientXToTime(clientX);
    seekTo(newTime);

    // attach listeners on window while dragging
    const onPointerMove = (ev) => {
      const cx = ev.clientX || (ev.touches && ev.touches[0] && ev.touches[0].clientX);
      const nt = clientXToTime(cx);
      seekTo(nt);
    };
    const onPointerUp = (ev) => {
      draggingRef.current = false;
      try {
        if (thumbRef.current && thumbRef.current.releasePointerCapture) {
          thumbRef.current.releasePointerCapture(ev.pointerId);
        }
      } catch (err) {}
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("touchmove", onPointerMove);
    window.addEventListener("touchend", onPointerUp);
  };

  // Click on track to seek
  const onTrackClick = (e) => {
    const clientX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX);
    const newTime = clientXToTime(clientX);
    seekTo(newTime);
  };

  // guard for NaN duration display
  const displayDuration = isFinite(duration) && duration > 0 ? duration : 0;

  // computed percentage for style
  const percent = Math.max(0, Math.min(100, (progress || 0) * 100));

  return (
    <Container className="flex-col gap-4 md:mb-16 mb-12">
      <SectionHeading sectionHeader=" " sectionTitle="When I'm Not Coding!" />
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        transition={{ duration: 0.18, ease: "easeInOut" }}
        className="flex flex-col gap-3 text-sm px-3 py-2 rounded-lg bg-muted/30
          border border-neutral-200 dark:border-neutral-800
          shadow-[inset_0px_-2px_2px_1px_var(--color-neutral-200)]
          dark:shadow-[inset_0px_-2px_2px_1px_var(--color-neutral-800)] w-full"
      >
        {/* TOP: album poster, title, play button */}
        <div className="flex items-center gap-3">
          {/* using uploaded image path as poster per your request */}
          <Image
            alt="Album art"
            width={48}
            height={48}
            className="rounded-md shadow-inner ring-1 ring-black/10 dark:ring-white/10"
            src={"/SpotiSong/songPoster.png"}
          />

          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-green-500/10 shadow-inner">
                <Image
                  alt="Spotify"
                  width={14}
                  height={14}
                  className="filter drop-shadow-sm"
                  src="/Logos/spotify.png"
                />
              </div>
              <span className="text-xs text-neutral-500 font-medium">All Fav</span>
            </div>

            <div className="flex flex-col min-h-[2.5rem] max-h-[2.5rem]">
              <a
                href="https://open.spotify.com/track/648GXyKI62FhbeBq0levWr?si=8229fa1595f447e7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium truncate text-foreground hover:underline hover:text-green-500 cursor-pointer h-5"
              >
                Dil Kya Kare
              </a>
              <span className="text-xs text-neutral-500 truncate h-4">by Adnan Sami</span>
            </div>
          </div>

          <button
            onClick={handlePlayPause}
            className="p-2 rounded-md border-[1px]
              dark:border-neutral-800 border-neutral-200
              dark:hover:shadow-[inset_-2px_-2px_4px_1px_var(--color-neutral-800)]
              hover:shadow-[inset_-2px_-2px_4px_1px_var(--color-neutral-200)]"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isLoading ? (
              <div className="h-4 w-4 border-2 border-green-500 border-t-transparent animate-spin rounded-full" />
            ) : isPlaying ? (
              <Pause size={20} className="text-neutral-500 dark:text-neutral-300" />
            ) : (
              <Play size={20} className="text-neutral-500 dark:text-neutral-300" />
            )}
          </button>
        </div>

        <div className="h-[1px] w-full bg-neutral-800" />

        {/* Animated expand/collapse: using maxHeight + overflow hidden for smooth open */}
        <motion.div
          initial={false}
          animate={{
            maxHeight: showTimeline ? 240 : 0,
            opacity: showTimeline ? 1 : 0,
          }}
          transition={{ duration: 0.32, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          {/* MIDDLE SECTION */}
          <div className="flex items-center gap-3 py-2">
            <div className="flex-1 min-w-0">
              <div className="truncate font-medium h-5">Junoon</div>
              <div className="truncate text-xs text-muted-foreground h-4">Mitraz</div>
            </div>
          </div>

          {/* SLIDER SECTION */}
          <div className="flex items-center gap-3 pb-2">
            <span className="text-xs tabular-nums text-muted-foreground w-10 text-right">
              {formatTime(currentTime)}
            </span>

            <div className="relative flex w-full items-center" style={{ touchAction: "none" }}>
              {/* Track - clickable */}
              <div
                ref={trackRef}
                onPointerDown={(e) => {
                  // clicking on the track seeks
                  const cx = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX);
                  const nt = clientXToTime(cx);
                  seekTo(nt);
                }}
                className="bg-muted h-1.5 w-full rounded-full relative overflow-hidden cursor-pointer bg-neutral-400 border-[1px] border-neutral-800"
              >
                <div className="absolute left-0 top-0 bottom-0 bg-neutral-600" style={{ width: `${percent}%` }} />
              </div>

              {/* thumb */}
              <div
                ref={thumbRef}
                role="slider"
                tabIndex={0}
                onPointerDown={onThumbPointerDown}
                onKeyDown={(e) => {
                  // keyboard seeking: arrow left/right
                  if (!audioRef.current || !audioRef.current.duration) return;
                  const step = 5; // 5 seconds
                  if (e.key === "ArrowRight") {
                    seekTo((audioRef.current.currentTime || 0) + step);
                  } else if (e.key === "ArrowLeft") {
                    seekTo((audioRef.current.currentTime || 0) - step);
                  }
                }}
                style={{ left: `${percent}%`, transform: "translate(-50%, -50%)", top: "50%" }}
                className="absolute"
              >
                <div
                  className="border-primary bg-background block w-3 h-3 rounded-full border shadow-sm hover:scale-125 transition-transform"
                  aria-hidden="true"
                />
              </div>
            </div>

            <span className="text-xs tabular-nums text-muted-foreground w-10 text-left">
              {formatTime(displayDuration)}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
