"use client";

import "./globals.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    const toggleMenu = () => {
      navMenu?.classList.toggle("active");
    };

    hamburger?.addEventListener("click", toggleMenu);

    return () => {
      hamburger?.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header>
          <nav className="flex justify-between items-center bg-gray-900 text-white p-4">
            <div className="text-xl font-bold">Excello</div>
            <div className="hamburger flex flex-col gap-1 cursor-pointer md:hidden">
              <div className="w-6 h-1 bg-white"></div>
              <div className="w-6 h-1 bg-white"></div>
              <div className="w-6 h-1 bg-white"></div>
            </div>
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <a href="/apply" className="hover:text-blue-400">
                  Apply
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-900 text-white text-center p-4 space-y-4 md:text-left md:flex md:justify-between">
          <p>
            &copy; 2024 by Sbonelo Gumede |{" "}
            <a href="mailto:gmdsbo@gmail.com" className="text-blue-400">
              gmdsbo@gmail.com
            </a>
          </p>
          <ul className="socials flex justify-center space-x-4 md:justify-end">
            <li>
              <a
                href="https://wa.me/qr/RM3XPRNHQ7SIC1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/Whatsapp.png"
                  alt="My Whatsapp contact"
                  className="h-8 w-8"
                />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/sbonelogumede"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/LinkedIn.png"
                  alt="My LinkedIn account"
                  className="h-8 w-8"
                />
              </a>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
