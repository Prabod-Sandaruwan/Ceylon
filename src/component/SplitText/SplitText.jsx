import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({ text, tag = "p", className = "", delay = 0.05 }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const letters = ref.current.querySelectorAll("span");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 40,filter: "blur(4px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.02,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, [text, delay]);

  const Tag = tag;

  return (
    <Tag className={`split-parent ${className}`} ref={ref}>
      {text.split("").map((char, i) => (
        <span key={i} className="split-char">
          {char}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
