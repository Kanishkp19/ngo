"use client";

import { Play } from "lucide-react";
import { useState, useRef } from "react";

type VideoCardProps = {
  src: string;
  title: string;
  description: string;
};

export default function VideoCard({ src, title, description }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="bg-white rounded-card shadow-card overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div 
        className="aspect-[4/3] relative bg-black group/video cursor-pointer" 
        onClick={handlePlay}
      >
        <video
          ref={videoRef}
          src={src}
          preload="metadata"
          controls={isPlaying}
          playsInline
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 group-hover/video:bg-black/45">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-md transition-transform duration-300 group-hover/video:scale-110 group-hover/video:bg-white text-navy">
              <Play className="fill-current ml-0.5" size={24} />
            </div>
          </div>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-[16px] font-display font-600 text-navy mb-2">{title}</h4>
          <p className="text-[14px] text-charcoal leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
