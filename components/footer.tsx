"use client";

import { Instagram, Phone,ArrowUp , X } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 rounded-full bg-[#f97316] p-3 shadow-lg shadow-[#f97316]/40 transition-all duration-300 hover:bg-orange-500 hover:scale-110 md:bottom-8 md:right-8 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top">
        <ArrowUp className="h-5 w-5 text-white" />
      </button>

      <footer id="footer" className="w-full border-t border-[#1e293b] bg-gradient-to-b from-black to-[#020617]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 lg:py-16">
            {/* Logo & Description */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-[#f97316] flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-black">S</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    by dekto
                  </h3>
                  <p className="text-gray-400 text-sm">Video Editing Studio</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                Crafting cinematic stories that captivate audiences.
              </p>
              {/* Social Links */}
              <div className="flex gap-2">
                <a
                  href="https://www.instagram.com/by_dekto/"
                  className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-black/20">
                  <Instagram className="h-5 w-5 text-gray-300 group-hover:text-[#f97316]" />
                </a>
                <a
                  href="https://wa.me/212681334600"
                  className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-black/20">
                  <Phone className="h-5 w-5 text-gray-300 group-hover:text-[#f97316]" />
                </a>
                <a
                  href="https://x.com/by_dekto"
                  className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-black/20">
                  <X className="h-5 w-5 text-gray-300 group-hover:text-[#f97316]" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block py-1">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block py-1">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block py-1">
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block py-1">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block py-1">
                    Video Editing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block py-1">
                    Color Grading
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block py-1">
                    Motion Graphics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block py-1">
                    YouTube Optimization
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-2 lg:col-span-1">
              <h4 className="text-white font-semibold text-lg mb-6">
                Get in Touch
              </h4>
              <div className="space-y-4 mb-6">
                <p className="text-gray-400 flex items-start gap-3">
                  <span className="text-[#f97316] mt-1 shrink-0">📧</span>
                  <span>ghidanimohamed@gmail.com</span>
                </p>
                <p className="text-gray-400 flex items-start gap-3">
                  <span className="text-[#f97316] mt-1 shrink-0">📱</span>
                  <span>+212 681334600</span>
                </p>
              </div>
              <a
                href="https://sutoxoriginals.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                className="inline-block bg-gradient-to-r from-[#fe7b4c] to-orange-500 text-black px-6 py-3 rounded-xl font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full text-center">
                Start Project
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800/50 pt-8 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-gray-500 text-sm md:text-base order-2 md:order-1">
              © 2026 by dekto . All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-500 order-1 md:order-2">
              <a
                href="#"
                className="hover:text-white transition-colors hover:underline">
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors hover:underline">
                Terms
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors hover:underline">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
