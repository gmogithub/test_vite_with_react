import React, { FC, useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string,
  isPlaying: boolean
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ src, isPlaying }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline/>;
}