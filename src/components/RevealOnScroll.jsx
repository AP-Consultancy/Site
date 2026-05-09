import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children, delay = 0, className = "", ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll${visible ? " visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </div>
  );
}
