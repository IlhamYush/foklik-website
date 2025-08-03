import React from "react";
import Image from "next/image";

import Navbar from "../components/Navbar";
import ScrollWrapper from "../components/ScrollWrapper";
import ArticleList from "./ArticleList";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <ScrollWrapper>
      <main>
        <div className="bg-gradient-to-b from-[#113F67] via-[#04408D] to-black">
          <div className="relative z-10 mx-13 p-5 -mb-1">
            <Navbar />
            <div className="flex flex-col md:flex-row overflow-hidden gap-6 mt-10 w-[100vh]">
              <div className="flex-1 space-y-3">
                <p className="text-white font-semibold">
                  Sep, 2025 / By Salsabila
                </p>
                <h2 className="text-white text-4xl font-bold">
                  Nongkrong Sambil Main? <br />
                  Ini Alasan Kenapa Forklik Menjadi <br /> Pilihan Anak Kampus
                  Bandung!
                </h2>
                <p className="text-white">
                  Bandung punya banyak tempat nongkrong, tapi tidak semua bisa
                  memberi pengalaman yang menyenangkan seperti makan enak,
                  suasana nyaman dan hiburan seru dalam satu tempat. Nah, di
                  sinilah Forklik Cafe and Billiard hadir sebagai solusi buat
                  kamu yang butuh tempat nongkrong beda dari yang lain.
                </p>
              </div>
            </div>

            {/* <div className="flex justify-center p-15 mt-20">
              <Image
                src={group1}
                alt="group1"
                className="object-cover w-full"
              />
            </div> */}

            <ArticleList />
          </div>
        </div>
        <Footer />
      </main>
    </ScrollWrapper>
  );
}
