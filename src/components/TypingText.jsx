import { useEffect, useState } from "react";

/**
 * Cycles through an array of strings with a typewriter effect,
 * evoking a terminal boot sequence — echoes the cybersecurity thread
 * running through the whole site.
 */
export default function TypingText({ strings, typingSpeed = 55, pause = 1600, deletingSpeed = 28 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === strings[index].length + 1 && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % strings.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, strings, typingSpeed, deletingSpeed, pause]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => setBlink((b) => !b), 420);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <span className="font-mono">
      {strings[index].substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0 }} className="text-(--color-cyan)">_</span>
    </span>
  );
}
