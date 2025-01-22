import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const ScrollCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const scrollY = useRef(0);
  const scrollThreshold = useRef(0);

  const scrollData = [
    {
      image: "/public/images/bg-1.jpg",
      header: "Header 1",
      description: "Description 1",
    },
    {
      image: "/public/images/bg-2.jpg",
      header: "Header 2",
      description: "Description 2",
    },
    {
      image: "/public/images/bg-3.jpg",
      header: "Header 3",
      description: "Description 3",
    },
    {
      image: "/public/images/bg-4.jpg",
      header: "Header 4",
      description: "Description 4",
    },
    {
      image: "/public/images/bg-5.jpg",
      header: "Header 5",
      description: "Description 5",
    },
    {
      image: "/public/images/bg-6.jpg",
      header: "Header 6",
      description: "Description 6",
    },
    {
      image: "/public/images/bg-7.jpg",
      header: "Header 7",
      description: "Description 7",
    },
    {
      image: "/public/images/bg-8.jpg",
      header: "Header 8",
      description: "Description 8",
    },
  ];

  const variantsBg = {
    enter: (direction) => {
      return {
        y: direction === 1 ? "100%" : "-100%",
      };
    },
    center: {
      y: 0,
    },
    exit: (direction) => {
      return {
        y: direction === 1 ? "-100%" : "100%",
      };
    },
  };

  const variantsSmallBg = {
    enter: (direction) => {
      return {
        y: direction === 1 ? "30%" : "-30%",
      };
    },
    center: {
      y: 0,
    },
    exit: (direction) => {
      return {
        y: direction === 1 ? "-30%" : "30%",
      };
    },
  };

  const headerVariants = {
    enter: (direction) => {
      return {
        y: direction === 1 ? "30%" : "-30%",
      };
    },
    center: {
      y: 0,
    },
    exit: (direction) => {
      return {
        y: direction === 1 ? "-30%" : "30%",
      };
    },
  };

  const handleScroll = (event) => {
    scrollY.current += event.deltaY;
    if (scrollY.current >= scrollThreshold.current) {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % scrollData.length);
      scrollY.current = 0;
    } else if (scrollY.current <= -scrollThreshold.current) {
      setDirection(-1);
      setActiveIndex(
        (prev) => (prev - 1 + scrollData.length) % scrollData.length
      );
      scrollY.current = 0;
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [activeIndex]);

  useEffect(() => {
    scrollThreshold.current = window.innerHeight * 0.8;
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden relative cursor-pointer">
      {/* bg images */}
      <AnimatePresence custom={direction}>
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={variantsBg}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${scrollData[activeIndex].image})`,
          }}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        />
      </AnimatePresence>

      {/* headers */}
      <AnimatePresence custom={direction}>
        <motion.div
          variants={headerVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute text-white font-s text-s-h2 top-[calc(50%)] left-[16.180vw]"
        >
          {scrollData[activeIndex].header}
          <p className="text-sm font-normal">
            {scrollData[activeIndex].subHeader}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* small images  */}
      <div className="absolute w-[22vw] h-[27vw] bg-cover bg-center top-[calc(50%-13.5vw)] left-[calc(50%-11vw)] overflow-hidden">
        <div className="relative w-full h-full">
          <AnimatePresence custom={direction}>
            <motion.div
              key={activeIndex}
              variants={variantsSmallBg}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                backgroundImage: `url(${scrollData[activeIndex].image})`,
              }}
              className="absolute w-[22vw] h-[27vw] shadow bg-cover bg-center"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ScrollCarousel;
