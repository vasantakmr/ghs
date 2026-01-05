"use client";

import { motion } from "motion/react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative h-[90vh] lg:h-screen w-full overflow-hidden bg-gray-100">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/Hero/bg.webm" type="video/webm" />
        </video>

        <div className="absolute top-0 w-full z-50">
          <Navbar />
        </div>

        <div className="relative flex flex-col justify-end h-full w-full max-w-[1800px] px-[16px] xl:px-[40px] pb-[40px] gap-[16px] text-[#1c1917]">
          {/* Middle Section */}
          <div className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-end gap-[16px]">
            {/* Left: Description */}
            <div className="max-w-xl">
              <p className="text-[20px] lg:text-[22px] xl:text-[24px] font-light leading-tight">
                An interior design studio crafting timeless{" "}
                <br className="hidden md:block" />
                spaces where style meets purpose.
              </p>
            </div>

            {/* Right: Services */}
            <div className="text-left lg:text-right flex flex-col gap-[2px] text-lg text-[16px] xl:text-[18px] font-light">
              <p>Renovation</p>
              <p>Interior Design</p>
              <p>Space Planning</p>
              <p>Custom Furniture</p>
            </div>
          </div>

          <div>
            {/*Big Title */}
            <h1 className="text-[11.3vw] sm:text-[12vw] lg:text-[11.6vw] leading-[1] font-medium tracking-tighter text-center text-white/80 mix-blend-difference select-none uppercase whitespace-nowrap overflow-visible">
              Tessera Design
            </h1>
          </div>
        </div>
      </div>

      {/* Intro Animation Overlay */}
      <motion.div
        className="absolute inset-0 z-[100] flex items-center justify-center bg-[#fafaf9]"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
          delay: 3,
        }}
      >
        <div className="relative flex flex-col items-center">
          {/* Text Container */}
          <div className="relative overflow-hidden mb-2">
            <motion.h1
              className="text-5xl md:text-7xl font-medium text-[#0c0a09] tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.5,
                ease: "easeOut",
              }}
            >
              Tessera
            </motion.h1>
          </div>

          {/* The Bar */}

          <motion.div
            className="w-full flex justify-start h-[3px] bg-gray-300"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2.2, duration: 0.3 }}
          >
            <motion.div
              className="h-full bg-[#0c0a09]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
