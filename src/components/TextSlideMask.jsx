import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slideVariants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring" },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: { duration: 0.5, type: "spring" },
  },
};

const texts = ["Seamless", "Dynamic", "Scalable", "Fast", "Reactive", "Engaging"];

const TextSlideMask = ({ children }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const changeText = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };
  useEffect(() => {
    const timeout = setTimeout(changeText, 3000);
    return () => clearTimeout(timeout);
  }, [currentTextIndex, setCurrentTextIndex]);

  return (
    <span className=" overflow-hidden  ">
      <span className="sr-only">{children}</span>
      <AnimatePresence mode="wait">
        <motion.span
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          exit="exit"
          key={currentTextIndex}
          className="overflow-hidden text-sky-500"
        >
          {texts[currentTextIndex].split("").map((character, j) => (
            <motion.span
              className="inline-block"
              variants={slideVariants}
              key={j}
            >
              {character}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default TextSlideMask;
