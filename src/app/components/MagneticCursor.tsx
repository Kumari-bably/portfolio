import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export function MagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  const outlineX = useSpring(0, { stiffness: 150, damping: 20 });
  const outlineY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
      outlineX.set(e.clientX - 20);
      outlineY.set(e.clientY - 20);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("magnetic")) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);
    
    // Add listeners to magnetic elements
    const magneticElements = document.querySelectorAll(".magnetic");
    magneticElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      magneticElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, outlineX, outlineY]);

  // Hide on mobile/touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          left: cursorX,
          top: cursorY,
          scale: isHovering ? 2 : 1,
        }}
      />
      <motion.div
        className="cursor-outline"
        style={{
          left: outlineX,
          top: outlineY,
          scale: isHovering ? 1.5 : 1,
        }}
      />
    </>
  );
}
