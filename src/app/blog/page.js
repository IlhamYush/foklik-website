import React from "react";
import Image from "next/image";

import about1 from "../assets/Image.png";
import Navbar from "../components/Navbar";
import ScrollWrapper from "../components/ScrollWrapper";
import ArticleList from "./ArticleList";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <ScrollWrapper>
      <main>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mt-4">
          <Navbar />
          <section className="flex flex-col md:flex-row overflow-hidden gap-6 mt-10">
            {/* Section Kiri */}
            <div className="flex-1 space-y-3">
              <p className="text-black font-semibold">
                Sep, 2025 / By Salsabila
              </p>
              <h2 className="text-black text-4xl font-bold">
                Nongkrong Sambil Main? <br />
                Ini Alasan Forklik Menjadi Pilihan Anak Kampus Bandung!
              </h2>
              <p className="text-black">
                Bandung punya banyak tempat nongkrong, tapi tidak semua bisa
                memberi pengalaman yang menyenangkan seperti makan enak, suasana
                nyaman dan hiburan seru dalam satu tempat. Nah, di sinilah
                Forklik Cafe and Billiard hadir sebagai solusi buat kamu yang
                butuh tempat nongkrong beda dari yang lain.
              </p>
            </div>

            {/* Section Kanan */}
            <div className="flex-1">
              <div className="rounded-md h-[300px] w-full overflow-hidden">
                <Image
                  src={about1}
                  alt="AboutUs"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          <ArticleList />

          <p className="text-black text-xl text-justify mt-2">
            Forklik Cafe & Billiard hadir sebagai ruang hangout baru untuk
            mahasiswa dan anak muda Bandung yang menginginkan suasana santai,
            seru, dan nyaman. Lebih dari sekadar tempat ngopi atau main biliar,
            Forklik menawarkan pengalaman sosial yang utuh — mulai dari ngobrol
            santai, mengerjakan tugas, hingga seru-seruan bareng komunitas.
            Bebas alkohol, bebas tekanan — Forklik diciptakan sebagai ruang aman
            dan positif untuk semua. Berlokasi strategis dekat area kampus,
            dengan interior cozy dan harga ramah kantong, Forklik jadi tempat
            favorit melepas penat setelah padatnya aktivitas sehari-hari. Di
            sinilah obrolan ringan tumbuh menjadi cerita, dan momen sederhana
            berubah jadi kenangan berkesan — entah datang sendiri, berdua, atau
            ramean. Forklik bukan sekadar tempat, tapi ruang yang hidup; selalu
            siap menyambutmu apa adanya. #ChillAndPlay #ForklikSpace
          </p>
        </div>
        <Footer />
      </main>
    </ScrollWrapper>
  );
}
