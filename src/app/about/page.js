import React from "react";
import ScrollWrapper from "../components/ScrollWrapper";
import Navbar from "../components/Navbar";

import Image from "next/image";
import about1 from "../assets/bg1.png";
import Gallery from "./Gallery";
import Footer from "../components/Footer";

export default function About() {
  return (
    <ScrollWrapper>
      <main>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mt-4">
          <Navbar />

          <section className="flex flex-col justify-center items-center gap-40 mt-10 md:flex-row md:items-center">
            {/* Section Kiri */}
            <div className="flex justify-center items-center">
              <h2 className="text-black text-lg font-bold">
                Tentang Forklik <br /> Cafe and Billiard
              </h2>
            </div>

            {/* Section Kanan */}
            <div className="flex-1 text-black space-y-4 text-justify text-lg">
              <p>
                Forklik adalah tempat nongkrong seru yang menggabungkan sensasi
                kuliner, hiburan, dan suasana santai dalam satu ruang. Berlokasi
                di Bandung dan dikelilingi oleh kampus-kampus ternama, Forklik
                hadir untuk jadi “rumah kedua” bagi mahasiswa, komunitas, dan
                siapa pun yang butuh tempat nyaman untuk melepas penat, ngobrol,
                atau seru-seruan bareng.
              </p>
              <p>
                Kami percaya bahwa nongkrong bukan hanya soal makanan dan
                minuman, tapi juga soal koneksi dan pengalaman. Di Forklik, kamu
                bisa menikmati berbagai pilihan menu yang ramah di kantong, main
                biliar bareng teman, nugas dengan suasana cozy, atau bahkan
                nonton bareng acara favorit.
              </p>
              <p>
                Dengan konsep cafe & billiard yang menyatu, Forklik siap jadi
                tempat untuk ide kreatif bertemu, komunitas tumbuh, dan kenangan
                terbentuk. Suasana hangat, pelayanan ramah, dan desain tempat
                yang kekinian kami siapkan agar setiap kunjungan kamu selalu
                terasa spesial.
              </p>
              <p>
                Mari nongkrong, main, dan seru-seruan di Forklik! Karena di
                sini, tempat bukan cuma untuk duduk—tapi untuk tumbuh, berbagi,
                dan menikmati momen.
              </p>
            </div>
          </section>

          <div className="w-full h-[500px] rounded-[20px] overflow-hidden mt-10 relative">
            <Image
              src={about1}
              alt="About Forklik"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>

          <Gallery />
        </div>
        <Footer />
      </main>
    </ScrollWrapper>
  );
}
