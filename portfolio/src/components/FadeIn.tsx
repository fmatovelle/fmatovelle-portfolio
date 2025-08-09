"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** retraso opcional en segundos */
  delay?: number;
  /** desplazamiento vertical inicial en px */
  y?: number;
};

export default function FadeIn({ children, delay = 0, y = 16 }: Props) {
  return (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut", delay }}
        >
      {children}
    </motion.div>
  );
}
