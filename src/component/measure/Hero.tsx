"use client";

import { motion } from "motion/react";
import Image from "next/image";
const headingLines = ["Every home is a story worth getting right."];
const subtext =
  "We help you create a space that feels truly yours, reflecting your culture, routines, chaos, and calm.";
const subtextWords = subtext.split(" ");
import Navbar from "./Navbar";
export default function Hero() {
  // Animation settings
  const bgDuration = 0.8;
  const textDelay = bgDuration; // Text starts after BG finishes
  const textDuration = 0.5;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white text-white">
      {/* 1. Background Image Animation: Width increases from middle */}
      <motion.div className="absolute inset-0 w-full h-full z-0 flex justify-center items-center">
        <motion.div
          className="relative h-full overflow-hidden"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: bgDuration, ease: "easeIn" }}
        >
          <div className="absolute top-0 left-1/2 h-full w-screen -translate-x-1/2">
            <Image
              src="/Hero/h1.avif"
              alt="Interior Design Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full">
        {/* 2. Navbar: -y-100 to 0, opacity 0 to 1 */}
        <div className="absolute top-0 left-0 w-full z-50">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: textDelay,
              duration: textDuration,
              ease: "easeOut",
            }}
          >
            <Navbar />
          </motion.div>
        </div>

        <div className="pt-[220px] xl:pt-[300px] px-3 xl:px-5 h-full flex flex-col justify-between">
          {/* Middle: Main Text Content */}
          <div className="w-full flex flex-col gap-12 lg:flex-row justify-between ">
            {/* 3. Left: Main Heading: Staggered Lines */}
            <motion.h1
              className="text-5xl xl:text-[64px] font-medium leading-[1.1] tracking-tight md:max-w-[580px] lg:max-w-[450px] xl:max-w-[600px]"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.3, // Delay between lines
                    delayChildren: textDelay,
                  },
                },
              }}
            >
              {headingLines.map((line, index) => (
                <motion.span
                  key={index}
                  className="block"
                  variants={{
                    hidden: { x: -20, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: textDuration, ease: "easeOut" },
                    },
                  }}
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>

            {/* 3. Right: Subtext: Staggered Words to simulate flow */}
            <div className="flex justify-end ">
              <motion.p
                className="text-[16px] lg:text-lg w-3/4 lg:w-auto lg:max-w-[317px] xl:max-w-[335px] leading-tight tracking-tight font-light text-left"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.02, // Fast stagger for words
                      delayChildren: textDelay,
                    },
                  },
                }}
              >
                {subtextWords.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={{
                      hidden: { x: 10, opacity: 0 },
                      visible: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: textDuration, ease: "easeOut" },
                      },
                    }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </div>
          </div>

          {/* 4. Bottom: Large Text: y-10 to 0, opacity 0 to 1 */}
          <div className="w-full pb-0 overflow-hidden leading-none ">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: textDelay,
                duration: textDuration,
                ease: "easeOut",
              }}
            >
              <h1 className="text-[13.8vw] sm:text-[13.9vw] font-medium tracking-tighter leading-[1.2] whitespace-nowrap  w-full">
                Good Homestory
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
