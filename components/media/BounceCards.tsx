"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./BounceCards.css";

type BounceCardsProps = {
  className?: string;
  images?: string[];
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  enableHover?: boolean;
};

export default function BounceCards({
  className = "",
  images = [],
  animationDelay = 0.4,
  animationStagger = 0.08,
  easeType = "elastic.out(1, 0.6)",
  enableHover = true,
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 768;
      const baseOffset = isDesktop ? 115 : 80;

      images.forEach((_, i) => {
        const colI = Math.floor(i / 2);
        const rowI = i % 2;
        const targetX = colI === 0 ? -baseOffset : baseOffset;
        const targetY = rowI === 0 ? -baseOffset : baseOffset;
        const targetRotate = i === 0 ? -6 : i === 1 ? 3 : i === 2 ? -3 : 6;

        gsap.fromTo(
          `.card-${i}`,
          { scale: 0, x: 0, y: 0, rotate: 0 },
          {
            scale: 1,
            x: targetX,
            y: targetY,
            rotate: targetRotate,
            delay: animationDelay + i * animationStagger,
            ease: easeType,
            duration: 0.8,
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [images, animationStagger, easeType, animationDelay]);

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover || !containerRef.current) return;

    const q = gsap.utils.selector(containerRef);
    const isDesktop = window.innerWidth >= 768;

    const baseOffset = isDesktop ? 115 : 80;
    const pushedOffset = isDesktop ? 155 : 110;

    images.forEach((_, i) => {
      const target = q(`.card-${i}`);
      gsap.killTweensOf(target);

      const colH = Math.floor(hoveredIdx / 2);
      const rowH = hoveredIdx % 2;
      const colI = Math.floor(i / 2);
      const rowI = i % 2;

      let targetX = colI === 0 ? -baseOffset : baseOffset;
      let targetY = rowI === 0 ? -baseOffset : baseOffset;
      let targetRotate = i === 0 ? -6 : i === 1 ? 3 : i === 2 ? -3 : 6;
      let targetScale = 1;

      if (i === hoveredIdx) {
        targetRotate = 0;
        targetScale = 1.15;
      } else {
        targetScale = 0.9;
        // Push X
        if (colI !== colH) {
          targetX = colI === 0 ? -pushedOffset : pushedOffset;
        }
        // Push Y
        if (rowI !== rowH) {
          targetY = rowI === 0 ? -pushedOffset : pushedOffset;
        }
      }

      gsap.to(target, {
        x: targetX,
        y: targetY,
        rotate: targetRotate,
        scale: targetScale,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  const resetSiblings = () => {
    if (!containerRef.current) return;

    const q = gsap.utils.selector(containerRef);
    const isDesktop = window.innerWidth >= 768;
    const baseOffset = isDesktop ? 115 : 80;

    images.forEach((_, i) => {
      const target = q(`.card-${i}`);
      gsap.killTweensOf(target);

      const colI = Math.floor(i / 2);
      const rowI = i % 2;
      const targetX = colI === 0 ? -baseOffset : baseOffset;
      const targetY = rowI === 0 ? -baseOffset : baseOffset;
      const targetRotate = i === 0 ? -6 : i === 1 ? 3 : i === 2 ? -3 : 6;

      gsap.to(target, {
        x: targetX,
        y: targetY,
        rotate: targetRotate,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  return (
    <div className={`bounceCardsContainer ${className}`} ref={containerRef}>
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`card card-${idx}`}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="image" src={src} alt={`collage-card-${idx}`} />
        </div>
      ))}
    </div>
  );
}
