import React from "react";
import Image from "next/image";

import Komponen2 from "../app/assets/Layer_1.png";
import bgSalsa from "../app/assets/bgSalsa.png";

import FirstSection from "./components/FirstSection";
import Navbar from "./components/Navbar";
import ThirdSection from "./components/ThirdSection";
import Comment from "./components/Comment";
import Footer from "./components/Footer";
import ScrollWrapper from "./components/ScrollWrapper";
import SecondSection from "./components/SecondSection";

export default function Home() {
  return (
    <ScrollWrapper>
      <main className="scroll-smooth">
        <div className="bg-gradient-to-b from-[#002046] via-[#000E1F] to-black overflow-hidden">
          <div className="absolute inset-0 z-0 w-full">
            <Image src={bgSalsa} alt="bgSalsa" className="object-cover" />
          </div>
          <div className="relative z-10 mx-10 px-4 py-5 sm:px-6 lg:px-8">
            <Navbar />
          </div>

          <div className="px-10 relative z-10 py-20">
            {/* Section Pertama */}
            <FirstSection />

            <div className="absolute top-7 right-0 z-0">
              <Image
                src={Komponen2}
                alt="Komponen 2"
                className="py-40 w-[450px] object-cover"
              />
            </div>
          </div>

          <div className="px-15 relative z-10">
            {/* Section Kedua */}
            <SecondSection />

            {/* Section Ketiga */}
            <ThirdSection />

            {/* Comment */}
            <div className="py-15">
              <Comment />
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </ScrollWrapper>
  );
}
