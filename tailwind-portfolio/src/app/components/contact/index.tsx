"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerRefInView = useInView(containerRef, {
    // once: true,
    margin: "-40px",
  });
  return (
    <>
      <motion.div
        ref={containerRef}
        id="contact"
        className="container my-32 xl:my-36 mx-auto p-8 max-w-4xl"
      >
        <div className="flex flex-col text-xl gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={isContainerRefInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex w-full items-center gap-6"
          >
            <hr className="w-full" />
            <span className="text-nowrap text-secondary">03. Contact Me</span>
            <hr className="w-full" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={isContainerRefInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-violet-200 font-sans font-extrabold text-4xl md:text-5xl tracking-wider mt-12 mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={isContainerRefInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-center max-w-xl leading-relaxed tracking-wide text-slate-400 text-lg font-sans"
          >
            While I&apos;m actively exploring new opportunities, my inbox is
            always open. Whether you have a question, a potential collaboration,
            or just want to say hi, I welcome your message and will do my best
            to respond promptly!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={isContainerRefInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10"
          >
            {/* Button */}
            <button className="rounded-md w-max border border-secondary p-4 px-6 text-sm tracking-wider text-secondary transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-primary-shadow mx-auto mt-12">
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=manishjoc14@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Say Hello
              </Link>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
