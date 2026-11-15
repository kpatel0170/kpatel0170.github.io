"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/*
 * Fades its children in the first time they scroll into view, then stops
 * observing, so it never repeats.
 */
const Reveal = ({ children, className }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      className={`reveal ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
