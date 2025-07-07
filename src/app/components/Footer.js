import React from "react";

import Image from "next/image";
import bgFooter from "../assets/bola8.png";
import logoFooter from "../assets/logoFooter.png";
import { MapPin, Instagram, Phone, Sparkles, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full h-[400px] mt-20">
      {/* Background Image */}
      <Image
        src={bgFooter}
        alt="footer background"
        fill
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row justify-between items-start gap-10 text-white">
        <div className="flex flex-col items-start mt-15">
          <div className="flex items-center gap-2">
            <Image src={logoFooter} alt="logo" width={300} height={300} />
          </div>
        </div>

        {/* Jam Operasional */}
        <div className="flex flex-col items-center gap-4 mt-10">
          <div className="flex items-center gap-2 space-x-2">
            <Clock size={50} className="mt-2" />
            <div>
              <p className="text-sm font-semibold">Jam Operasional</p>
              <p className="text-sm">
                10.00PM-01.00AM Weekdays <br />
                10.00PM-02.00AM Weekends
              </p>
            </div>
          </div>
          <input
            type="email"
            placeholder="Your Email Address"
            className="mt-2 px-4 py-2 rounded-full bg-white/80 text-black placeholder:text-black w-[250px] focus:outline-none"
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-5 my-auto">
          <h3 className="font-bold text-2xl">CONTACT</h3>
          <div className="flex items-start gap-2">
            <div className="flex items-center gap-3">
              <MapPin size={25} />
              <p className="text-sm">
                Jl. Dipatiukur No. 91, Lebakgede, Kecamatan Coblong, <br /> Kota
                Bandung, Jawa Barat, Indonesia.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Instagram size={25} />
            <p>@forklikbilliard</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={25} />
            <p>+62 815 7292 0390</p>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles size={25} />
            <p>forklikcafeandbilliard</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-white/50 z-10"></div>
    </footer>
  );
}
