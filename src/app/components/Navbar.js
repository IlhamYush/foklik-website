"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo1 from "../assets/logoFooter.png";


export default function Navbar() {
  const pathname = usePathname();

  const textColor = pathname === "/" ? "text-white hover:text-white/50 transition-colors duration-300" : "text-white hover:text-white/50 transition-colors duration-300";

  return (
    <nav>
      <div>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className={`flex items-center mt-4 ${textColor}`}>
                <Image
                  src={logo1}
                  alt="logoCafe"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          <div className="hidden md:block mt-2">
            <div className="ml-4 flex items-center space-x-1">
              <Link
                href="/about"
                className={`text-lg font-bold hover:text-white/80 transition-colors duration-300 px-3 py-1 ${textColor}`}
              >
                About us
              </Link>
              <Link
                href="/blog"
                className={`text-lg font-bold hover:text-white/80 transition-colors duration-300 px-3 py-1 ${textColor}`}
              >
                Blog
              </Link>
              <Link
                href="/facility"
                className={`text-lg font-bold px-3 py-1 mr-5 ${textColor}`}
              >
                Facility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
