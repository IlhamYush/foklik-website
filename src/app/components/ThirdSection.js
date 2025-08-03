import React from "react";
import Image from "next/image";

import gambar1 from "../assets/thirdsection4.png";
import gambar2 from "../assets/bola2.png";

import third1 from "../assets/thirdsection1.jpg"
import third2 from "../assets/thirdsection2.png"
import third3 from "../assets/thirdsection3.jpg"

export default function ThirdSection() {
  return (
    <div>
      <div className="flex flex-col py-20 lg:flex-row space-x-9">
        <div className="relative w-[400px] h-[500px] rounded-[20px] overflow-hidden">
          <Image
            src={gambar1}
            alt="Background Image-1"
            className="object-cover rounded-[20px]"
            fill
          />
        </div>

        <div className="py-10 space-y-4 w-[95vh]">
          <h1 className="text-white font-semibold text-2xl">
            Ngumpul bareng nggak harus ribet.
          </h1>

          <p className="text-white text-md">
            Di Forklik, semua ada dalam satu tempat: tempat main biliar yang
            cozy, kopi yang nikmat, main games ps5 bareng temen dan ambience
            yang bikin betah duduk lama. Mau dateng buat tanding biliar bareng
            temen, ngobrol santai sambil ngemil, atau sekadar cari suasana baru
            Forklik selalu siap nemenin.
          </p>

          <p className="text-white text-md mt-4">
            Dari siang yang tenang sampai malam yang makin hidup, vibe di sini
            selalu seru. Musik chill, pencahayaan hangat, dan tawa yang nggak
            pernah putus. Semua momen itu terekam dalam setiap sudut, dan ini
            sebagian dari cerita seru yang udah kejadian di Forklik. Lihat
            galeri kita, siapa tahu fotomu ada di sini juga
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center space-x-10 -mt-65 ml-60">
        <div className="relative group cursor-pointer">
          <div
            className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-teal-500 to-cyan-400 
                      rounded-[30px] blur opacity-25 group-hover:opacity-100 transition duration-500"
          ></div>
          <div className="relative ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="relative w-[345px] h-[200px] rounded-[20px] overflow-hidden">
              <Image
                src={third1}
                alt="Overlap Image"
                className="object-cover rounded-[20px]"
                fill
              />
            </div>
          </div>
        </div>

        <div className="relative group cursor-pointer">
          <div
            className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-teal-500 to-cyan-400 
                      rounded-[30px] blur opacity-25 group-hover:opacity-100 transition duration-500"
          ></div>
          <div className="relative ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="relative w-[355px] h-[200px] rounded-[20px] overflow-hidden">
              <Image
                src={third2}
                alt="Overlap Image"
                className="object-cover rounded-[20px]"
                fill
              />
            </div>
          </div>
        </div>

        <div className="relative group cursor-pointer">
          <div
            className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-teal-500 to-cyan-400 
                      rounded-[30px] blur opacity-25 group-hover:opacity-100 transition duration-500"
          ></div>
          <div className="relative ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="relative w-[300px] h-[200px] rounded-[20px] overflow-hidden">
              <Image
                src={third3}
                alt="Overlap Image"
                className="object-cover rounded-[20px]"
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div className="z-20 -mt-40 -mr-20 flex justify-end">
        <Image
          src={gambar2}
          alt="Bola2"
          className="w-[200px] object-cover"
        />
      </div>
    </div>
  );
}
