import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const CursorPointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [content, setContent] = useState("scroll");

  useEffect(() => {
    const handleMouseMOve = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const targetClassList = e.target.classList;
      const classMapping = {
        play: "play",
        view: "view",
        custom: "custom",
      };

      for (const key in classMapping) {
        if (targetClassList.contains(key)) {
          setContent(classMapping[key]);
          return;
        }
      }
      setContent("scroll");
    };

    document.addEventListener("mousemove", handleMouseMOve);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMOve);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 5,
        y: position.y + 5,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      className="fixed z-[999] w-[70px] h-[70px] rounded-full backdrop-blur-[5px] bg-black/20 flex justify-center items-center overflow-none will-change-transform pointer-events-none "
    >
      <div className="text-sm text-white leading-none pointer-events-none">
        {content}
      </div>
    </motion.div>
  );
};

export default CursorPointer;
