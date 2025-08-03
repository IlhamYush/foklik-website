import React from "react";

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
            <img src="/assets/bgSalsa.png" alt="bgSalsa" className="object-cover" />
          </div>
          <div className="relative z-10 mx-10 px-4 py-5 sm:px-6 lg:px-8">
            <Navbar />
          </div>

          <div className="px-10 relative z-10 py-20">
            <FirstSection />

            <div className="absolute top-7 right-0 z-0">
              <img
                src="/assets/Layer_1.png"
                alt="Komponen 2"
                className="py-40 w-[450px] object-cover"
              />
            </div>
          </div>

          <div className="px-15 relative z-10">
            <SecondSection />

            <ThirdSection />

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
