"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { easeIn, easeInOut, motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const chicagoTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/Chicago",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(chicagoTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full max-w-[1560px] mx-auto grid grid-rows-1 grid-cols-4 gap-x-5 p-5 relative overflow-hidden text-white items-start z-50">
      {/* Column 1: Logo */}
      <div className="flex items-start">
        <Link
          href="/"
          className=" text-[24px]  whitespace-nowrap"
        >
          Good Homestory
        </Link>
        {/* <Link
          href="/"
          className="font-bold text-[12px] tracking-tight self-start"
        >
          ®
        </Link> */}
      </div>

      {/* Column 2: Info */}
      <div className="flex flex-col text-[18px] font-medium leading-tight invisible xl:visible">
        <span>Work that holds up.</span>
        <span>India {time}</span>
      </div>

      {/* Column 3: Menu */}
      <div className="flex justify-start">
        {/* Mobile/Tablet: Static Links */}
        <div className="hidden lg:flex gap-5 xl:hidden">
          <Link
            href="/work"
            className="text-[18px] font-medium hover:opacity-70"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-[18px] font-medium hover:opacity-70"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[18px] font-medium hover:opacity-70"
          >
            Contact
          </Link>
        </div>

        {/* Desktop: Animated Menu */}
        <motion.div
          className="relative cursor-pointer overflow-hidden h-[27px] hidden xl:grid grid-cols-1 grid-rows-1"
          initial="initial"
          whileHover="hover"
        >
          {/* Menu Text */}
          <motion.div
            className="col-start-1 row-start-1"
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" },
            }}
            transition={{ duration: 0.5, ease: easeInOut }}
          >
            <span className="text-[18px] font-medium block">Menu</span>
          </motion.div>

          {/* Links */}
          <motion.div
            className="col-start-1 row-start-1 flex gap-5"
            variants={{
              initial: { y: "100%" },
              hover: { y: 0 },
            }}
            transition={{ duration: 0.5, ease: easeInOut }}
          >
            <Link
              href="/work"
              className="text-[18px] font-medium hover:opacity-70"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-[18px] font-medium hover:opacity-70"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[18px] font-medium hover:opacity-70"
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Column 4: CTA */}
      <div className="flex justify-end items-center">
        <Link
          href="/contact"
          className="bg-white text-black px-4 py-2.5 text-[18px] font-medium hidden lg:block"
        >
          Get a quote
        </Link>
        <span
          className="text-[18px] font-medium lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          Menu
        </span>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full bg-black z-[60] overflow-hidden"
            initial={{ height: "55px" }}
            animate={{ height: "auto" }}
            exit={{ height: "55px" }}
            transition={{ duration: 0.7, ease: easeInOut }}
          >
            <div className="w-full max-w-[1560px] mx-auto p-5 flex flex-col gap-[50px]">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="flex items-start text-white">
                  <span className="font-bold text-[24px] tracking-tight">
                    Measure
                  </span>
                  <span className="font-bold text-[12px] tracking-tight self-start">
                    ®
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[18px] font-medium text-white"
                >
                  Close
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-[10px]">
                {["Work", "About", "Contact"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-[24px] font-medium text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Info */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col text-[18px] font-medium leading-tight text-white"
              >
                <span>Work that holds up.</span>
                <span>India, {time}</span>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pb-5"
              >
                <Link
                  href="/contact"
                  className="bg-white text-black px-4 py-2.5 text-[18px] font-medium inline-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
