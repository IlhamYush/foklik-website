import React from "react";

import { MapPin, Instagram, Phone, Sparkles, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full h-[400px] bg-black">
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row justify-between items-start gap-10 text-white">
        <div className="flex flex-col items-start mt-15">
          <div className="flex items-center gap-2">
            <img src="/assets/logoFooter.png" alt="logo" width={300} height={300} />
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
    </footer>
  );
}

{
  /* 
      <div className="flex-1 px-3 flex flex-col transition-all duration-300py-8 justify-center items-center gap-4">
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
          <div className="flex flex-col gap-2">
            <p className="text-black">Email</p>
            <Input
              type="email"
              placeholder="Enter your email"
              className="placeholder-black text-black w-full border-none bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-black">Your Messages</p>
            <Input
              type="text"
              placeholder="Enter your messages"
              className="placeholder-black text-black w-full border-none bg-white"
            />
            <button className="bg-black text-white px-6 py-2 rounded-md w-full mt-4 hover:bg-gray-800 transition-colors duration-300">
              Submit
            </button>
          </div>
        </div>
      </div> */
}
