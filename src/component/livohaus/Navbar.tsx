"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      className="w-full flex justify-center absolute top-0 left-0 z-50 py-4 lg:py-5 xl:py-6 px-[20px] lg:px-[40px] xl:px-[60px]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-[1200px] flex justify-between items-center text-white relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8  rounded flex items-center justify-center">
            <Image
              src="/Hero/image.png"
              alt="Logo"
              width={20}
              height={20}
              className="w-8 h-8"
            />
          </div>
          <span className="text-[28px] font-bold">Good Homestory</span>
        </div>

        {/* Links */}
        <div className="hidden xl:flex items-center gap-6 text-[18px] font-medium">
          <Link href="#" className="hover:text-orange-500 transition-colors">
            About
          </Link>
          <Link href="#" className="hover:text-orange-500 transition-colors">
            Services
          </Link>
          <Link href="#" className="hover:text-orange-500 transition-colors">
            Projects
          </Link>
          <Link href="#" className="hover:text-orange-500 transition-colors">
            Testimonials
          </Link>
          <Link href="#" className="hover:text-orange-500 transition-colors">
            FAQ's
          </Link>
        </div>

        {/* Button */}
        <motion.button
          className="relative bg-white py-[6px] pl-[24px] pr-[6px] rounded-full font-medium hidden xl:flex items-center gap-[10px] overflow-hidden"
          initial="initial"
          whileHover="hover"
        >
          <motion.span
            className="relative z-20 text-[18px]"
            variants={{
              initial: { color: "#000000" },
              hover: { color: "#ffffff" },
            }}
            transition={{ duration: 0.3 }}
          >
            Contact Us
          </motion.span>
          <div className="relative w-6 h-6 flex items-center justify-center text-white z-10">
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
              width="16"
              height="16"
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

        {/* Mobile Menu Icon */}
        <div
          className="xl:hidden text-white cursor-pointer z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full bg-black z-40 overflow-hidden flex flex-col"
            initial={{ height: "74px" }}
            animate={{ height: "auto" }}
            exit={{ height: "74px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className="w-full h-full flex flex-col px-[20px] pt-[100px] pb-6 overflow-y-auto">
              <div className="flex flex-col items-center justify-center flex-1 gap-[40px]">
                {/* Links */}
                <div className="flex flex-col items-center gap-[24px]">
                  {[
                    "About",
                    "Services",
                    "Projects",
                    "Testimonials",
                    "FAQ's",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <Link
                        href="#"
                        className="text-[24px] font-medium text-white hover:text-orange-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Button */}
                <motion.div
                  className="pb-[40px]"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <motion.button
                    className="relative bg-white px-5 py-2 rounded-full font-medium flex items-center gap-[10px] overflow-hidden"
                    initial="initial"
                    whileHover="hover"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.span
                      className="relative z-20 text-[18px]"
                      variants={{
                        initial: { color: "#000000" },
                        hover: { color: "#ffffff" },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Contact Us
                    </motion.span>
                    <div className="relative w-6 h-6 flex items-center justify-center text-white z-10">
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
                        width="16"
                        height="16"
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
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
