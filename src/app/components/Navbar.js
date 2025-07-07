import React from "react";
import Image from "next/image";
import logo1 from "../assets/logoCoffee.png";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <>
      <nav>
        <div>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center text-white">
                  <Image
                    src={logo1}
                    alt="logoCafe"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <span className="font-bold mt-2">
                    Forklik Cafe and Billiard
                  </span>
                </a>
              </div>
            </div>
            <div className="hidden md:block mt-2">
              <div className="ml-4 flex items-center space-x-1">
                <a
                  href="/"
                  className="text-white font-bold hover:text-white/80 transition-colors duration-300 px-3 py-1"
                >
                  About us
                </a>
                <a
                  href="/"
                  className="text-white font-bold hover:text-white/80 transition-colors duration-300 px-3 py-1"
                >
                  Blog
                </a>
                <a
                  href="/"
                  className="text-white font-bold hover:text-white/80 transition-colors duration-300 px-3 py-1 mr-5"
                >
                  Facility
                </a>
                <Input type="text" placeholder="Search For..." className="placeholder-black text-black w-40 border-none bg-white"/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
