"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from "motion/react";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section className="relative w-full xl:min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/Hero/h2.avif"
          alt="Livohaus Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </motion.div>

      <Navbar />

      <div className="relative z-10 w-full xl:min-h-screen pt-[140px] xl:pt-[160px] pb-[60px] px-[20px] lg:px-[40px] xl:px-[60px] flex flex-col">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col flex-1 justify-between gap-[16px] lg:gap-[130px] xl:gap-0">
          {/* Upper Content */}
          <div className="flex flex-col gap-[8px] lg:gap-6 max-w-[480px] lg:max-w-[530px] xl:max-w-[680px]">
            <motion.div
              className="flex items-center gap-2 text-sm font-semibold tracking-wider  uppercase text-[12px] md:text-[14px] xl:text-[16px]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-orange-500">#1</span>
              <span>Choice for home renovation in California</span>
            </motion.div>
            <div className="max-w-4xl">
              <BlurText
                text="Building Spaces That Reflect You — With Craft, Care and Complete Control"
                className="text-[36px] xl:text-[50px] font-semibold leading-[1.1] tracking-"
                delay={30}
                animateBy="words"
                direction="bottom"
              />
            </div>
          </div>

          {/* Bottom Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-[80px] md:gap-10">
            {/* Left: Text + Button */}
            <div className="flex flex-col gap-[32px] lg:gap-6 md:w-[480px] lg:w-1/2 xl:max-w-xl ">
              <div className="text-[16px] xl:text-[20px] text-gray-200 leading-relaxed">
                <BlurText
                  text="An architect-led interior design studio that designs homes shaped by your story.
With 460+ projects under our belt, we know good design starts with listening, making thoughtful choices, and creating spaces that work for now and for years to come."
                  delay={30}
                  animateBy="words"
                  direction="bottom"
                />
              </div>
              <motion.button
                className="relative bg-white py-[6px] pl-[24px] pr-[6px]   rounded-full font-medium flex items-center gap-3 w-fit overflow-hidden text-[16px] lg:text-[18px]"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover="hover"
              >
                <motion.span
                  className="relative z-20 text-black"
                  variants={{
                    initial: { color: "#000000" },
                    hover: { color: "#ffffff" },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Get In Touch
                </motion.span>
                <div className="relative w-8 h-8 flex items-center justify-center text-white z-10">
                  <motion.div
                    className="absolute inset-0 bg-orange-500 rounded-full -z-10"
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 15 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            </div>

            {/* Right: Testimonial */}
            <motion.div
              className="bg-white/20 backdrop-blur-[7.5px] p-4 xl:p-6 rounded-xl w-[350px] lg:w-[300px] xl:w-[350px] border border-white/10"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <div className="flex gap-1 text-orange-500 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-[14px] xl:text-[16px] text-gray-200 mb-4 leading-relaxed">
                "We help you create a space that feels truly yours, reflecting
                your culture, routines, chaos, and calm."
              </p>
              <p className="text-[14px] font-bold text-white">Good Homestory</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
