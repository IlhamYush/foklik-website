"use client";
import React, { useState } from "react";
import Image from "next/image";
import image1 from "../assets/bg1.png";

import { Input } from "@/components/ui/input";

export default function HeroSection() {
  const [reservation, setReservation] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row rounded-[50px] border-7 border-white/80 overflow-hidden m-6">
      {/* Sisi Kiri */}
      <div className="bg-white/80 text-white py-10 px-0 lg:px-8 flex-1">
        <h1 className="text-6xl font-bold mb-4 text-black">
          Reserve Your <br /> Ideal Holiday
        </h1>
        <p className="text-black/80 mb-4 text-2xl">Let's Get Acquainted</p>
        <div className="flex items-center justify-between mt-10">
          <p className="text-black">
            Forklik Cafe and Billiard, ruang santai untuk <br /> kumpul positif
            bareng teman, Solusi mengisi <br /> hari kosong anda
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300">
            MORE <span>↗</span>
          </button>
        </div>
        <div className="relative w-[500px] h-[250px] rounded-xl overflow-hidden mt-10 flex items-center">
          <Image
            src={image1}
            alt="billiardTable"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Sisi Kanan */}
      <div
        className={`flex-1 px-3 flex flex-col transition-all duration-300 ${
          reservation
            ? "bg-white/80 py-8 justify-center items-center gap-4"
            : "py-8 justify-end items-center"
        }`}
      >
        {reservation === true && (
          // <div
          //   className={`space-y-5 transition-opacity duration-700 ${
          //     reservation ? "opacity-100" : "opacity-0 pointer-events-none"
          //   }`}
          // >
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-black mb-4">
              Reservation Form
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-black">First Name</p>
                <Input
                  type="text"
                  placeholder="Enter your first name"
                  className="placeholder-black text-black w-full border-none bg-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-black">Last Name</p>
                <Input
                  type="text"
                  placeholder="Enter your last name"
                  className="placeholder-black text-black w-full border-none bg-white"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <p className="text-black">Email</p>
              <Input
                type="email"
                placeholder="Enter your email"
                className="placeholder-black text-black w-full border-none bg-white"
              />
            </div>

            {/* Your Messages */}
            <div className="flex flex-col gap-2">
              <p className="text-black">Your Messages</p>
              <Input
                type="text"
                placeholder="Enter your messages"
                className="placeholder-black text-black w-full border-none bg-white"
              />
              {/* Submit Button */}
              <button
                className="bg-black text-white px-6 py-2 rounded-md w-full mt-4  hover:bg-gray-800 transition-colors duration-300"
                onClick={() => setReservation(false)}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {!reservation && (
          <div className="flex gap-4 mb-4">
            <button
              className="bg-white text-black px-6 py-2 rounded-full"
              onClick={() => setReservation(true)}
            >
              BOOK NOW
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-full">
              LOCATION
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
