import React from "react";
import Image from "next/image";

import gambar1 from "../app/assets/buahGelas.png";
import background1 from "../app/assets/bg2.png";
import artikel1 from "../app/assets/bola8.png";

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SecondSection from "./components/SecondSection";
import Comment from "./components/Comment";
import Footer from "./components/Footer";
import ScrollWrapper from "./components/ScrollWrapper";

export default function Home() {
  return (
    <ScrollWrapper>
      <main className="scroll-smooth">
        {/* <div
          className="bg-cover bg-center py-3"
          style={{ backgroundImage: `url(${background1.src})` }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            <HeroSection />
          </div>
          <div className="absolute inset-0 bg-black/30 z-10"></div>
        </div> */}

        <div
          className="relative bg-cover bg-center py-3"
          style={{ backgroundImage: `url(${background1.src})` }}
        >
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            <HeroSection />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-md w-[352px] h-[300px]">
                <Image
                  src={gambar1}
                  alt="gambar3"
                  className="rounded-md object-cover"
                />
              </div>
              <p className="mt-4 text-black font-semibold">Memories</p>
              <p className="text-gray-500 text-sm">
                Body text for whatever you'd like to add more to the subheading.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="overflow-hidden rounded-md w-[352px] h-[300px]">
                <Image
                  src={gambar1}
                  alt="gambar3"
                  className="rounded-md object-cover"
                />
              </div>
              <p className="mt-4 text-black font-semibold">Event Bulanan</p>
              <p className="text-gray-500 text-sm">
                Body text for whatever you'd like to expand on the main point.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="overflow-hidden rounded-md w-[352px] h-[300px]">
                <Image
                  src={gambar1}
                  alt="gambar3"
                  className="rounded-md object-cover"
                />
              </div>
              <p className="mt-4 text-black font-semibold">Pengabdian</p>
              <p className="text-gray-500 text-sm">
                Body text for whatever you'd like to share more.
              </p>
            </div>
          </div>

          {/* Memories DLL */}
          <div className="mt-20">
            <SecondSection />
          </div>

          {/* Artikel */}
          <div className="mt-20">
            <h2 className="font-semibold text-black text-4xl">Article</h2>
          </div>
          <div className="grid grid-cols-2 gap-40 mt-10">
            {/* Kartu 1 */}
            <div className="flex flex-col items-start gap-4">
              {/* <div className="w-full h-[300px] rounded-md">
                <Image
                  src={background1}
                  alt="Artikel 1"
                  className="rounded-md object-cover"
                />
              </div> */}
              <div className="relative w-full h-[300px] rounded-md overflow-hidden group">
                <Image
                  src={background1}
                  alt="Artikel 1"
                  className="rounded-md object-cover w-full h-full"
                />

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">Open</span>
                </div>
              </div>

              <div>
                <h2 className="text-black font-semibold text-2xl mb-2">
                  Sub Heading Artikel 1
                </h2>
                <p className="text-black">
                  Body text for whatever you'd like to add more to the
                  subheading.
                </p>
              </div>
            </div>

            {/* Kartu 2 */}
            <div className="flex flex-col items-start gap-4">
              {/* <div className="w-full h-[300px] rounded-md">
                <Image
                  src={artikel1}
                  alt="Artikel 2"
                  className="rounded-md object-cover"
                />
              </div> */}
              <div className="relative w-full h-[300px] rounded-md overflow-hidden group">
                <Image
                  src={artikel1}
                  alt="Artikel 1"
                  className="rounded-md object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">Open</span>
                </div>
              </div>
              <div>
                <h2 className="text-black font-semibold text-2xl mb-2">
                  Sub Heading Artikel 2
                </h2>
                <p className="text-black">
                  Body text for whatever you'd like to add more to the
                  subheading.
                </p>
              </div>
            </div>
          </div>

          {/* Comment */}
          <div className="mt-20">
            <Comment />
          </div>
        </div>
        <Footer />
      </main>
    </ScrollWrapper>
  );
}
