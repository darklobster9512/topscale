import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  // Inhalte sind standardmäßig sichtbar. Erst wenn JS läuft und das Element
  // unterhalb des Sichtbereichs liegt, wird die Einblendung aktiviert.
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rect = node.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.9;
    if (reduceMotion || inView) return;

    setArmed(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={armed ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${armed ? `reveal ${shown ? "reveal-in" : ""}` : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
