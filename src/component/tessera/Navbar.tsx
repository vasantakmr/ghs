"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`w-full max-w-[1800px] mx-auto flex items-center justify-between p-4 xl:px-[40px] xl:py-[32px] text-black  text-[16px] font-medium tracking-tight`}
    >
      {/* Left Part */}
      <div className="hidden xl:flex items-center gap-[40px]">
        <span>VIJAYAWADA</span>
        <a href="#">HELLO@TESSERA.COM</a>
      </div>

      {/* Center Part */}
      <div>
        <span className="text-[20px] font-[540]">TESSERA</span>
      </div>

      {/* Right Part */}
      <div className="hidden xl:flex items-center gap-[2px]">
        <Link href="#">ABOUT,</Link>
        <Link href="#">PORTFOLIO,</Link>
        <Link href="#">SERVICES,</Link>
        <Link href="#">CONTACT</Link>
      </div>

      {/* Hamburger (Mobile/Tablet) */}
      <div
        className="xl:hidden flex flex-col gap-[6px] cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          className="w-[24px] h-[2px] bg-black"
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.div
          className="w-[15px] h-[2px] bg-black self-end"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.div
          className="w-[24px] h-[2px] bg-black"
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: "62px", backgroundColor: "#fafaf9" }}
            animate={{ height: "auto", backgroundColor: "#fafaf9" }}
            exit={{ height: "62px", backgroundColor: "rgba(250, 250, 249, 0)" }}
            transition={{
              duration: 0.5,
              ease: easeInOut,
              backgroundColor: { duration: 0.1, delay: 0.4 },
            }}
            className="absolute top-0 left-0 w-full -z-10 overflow-hidden xl:hidden"
          >
            <div className=" px-4 pb-6 pt-[62px] flex flex-col">
              {/* Part 2: Links */}
              <div className="h-[40px]" />
              <div className="flex flex-col gap-[12px]">
                {["ABOUT", "PORTFOLIO", "SERVICES", "CONTACT"].map((item) => (
                  <Link
                    href="#"
                    key={item}
                    className="text-[32px] leading-tight font-medium"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Gap 40px */}
              <div className="h-[40px]" />

              {/* Part 3: Footer Info */}
              <div className="flex flex-row justify-between text-[16px] uppercase font-medium">
                <span>VIJAYAWADA</span>
                <a href="#">HELLO@TESSERA.COM</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
