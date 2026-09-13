"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type StickerProps = {
  src: string;
  alt: string;
  size?: number;
  rotate?: number;
  float?: boolean;
  className?: string;
  priority?: boolean;
};

export function Sticker({
  src,
  alt,
  size = 88,
  rotate = 0,
  float = false,
  className,
  priority = false,
}: StickerProps) {
  const reduceMotion = useReducedMotion();
  const shouldFloat = float && !reduceMotion;

  return (
    <motion.span
      className={cn("inline-flex shrink-0 drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)]", className)}
      style={{ width: size, height: size }}
      aria-hidden={alt === "" ? true : undefined}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.86, rotate }}
      animate={
        shouldFloat
          ? { opacity: 1, scale: 1, y: [0, -10, 0], rotate: [rotate, rotate + 4, rotate] }
          : { opacity: 1, scale: 1, rotate }
      }
      transition={
        shouldFloat
          ? { opacity: { duration: 0.4 }, scale: { duration: 0.4 }, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } }
          : { duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }
      }
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        preload={priority}
        className="h-full w-full object-contain"
      />
    </motion.span>
  );
}
