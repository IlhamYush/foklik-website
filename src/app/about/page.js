import React from "react";
import ScrollWrapper from "../components/ScrollWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <ScrollWrapper>
      <main>
        <div className="bg-gradient-to-b from-black/90 via-[#04408D] to-black">
          <div className="relative z-10 p-5 mx-13 -mb-1">
            <Navbar />
            <section className="flex flex-col justify-center px-20 items-center gap-40 mt-10 md:flex-row md:items-center">
              <div className="flex justify-center items-center">
                <h2 className="text-white text-lg font-bold">
                  Tentang Forklik <br /> Cafe and Billiard
                </h2>
              </div>

              <div className="flex-1 text-white space-y-4 text-justify text-md">
                <p>
                  Forklik adalah tempat nongkrong seru yang menggabungkan
                  sensasi kuliner, hiburan, dan suasana santai dalam satu ruang.
                  Berlokasi di Bandung dan dikelilingi oleh kampus-kampus
                  ternama, Forklik hadir untuk jadi rumah kedua bagi mahasiswa,
                  komunitas, dan siapa pun yang butuh tempat nyaman untuk
                  melepas penat, ngobrol, atau seru-seruan bareng.
                </p>
                <p>
                  Kami percaya bahwa nongkrong bukan hanya soal makanan dan
                  minuman, tapi juga soal koneksi dan pengalaman. Di Forklik,
                  kamu bisa menikmati berbagai pilihan menu yang ramah di
                  kantong, main biliar bareng teman, nugas dengan suasana cozy,
                  atau bahkan nonton bareng acara favorit.
                </p>
                <p>
                  Dengan konsep cafe & billiard yang menyatu, Forklik siap jadi
                  tempat untuk ide kreatif bertemu, komunitas tumbuh, dan
                  kenangan terbentuk. Suasana hangat, pelayanan ramah, dan
                  desain tempat yang kekinian kami siapkan agar setiap kunjungan
                  kamu selalu terasa spesial.
                </p>
                <p>
                  Mari nongkrong, main, dan seru-seruan di Forklik! Karena di
                  sini, tempat bukan cuma untuk duduk—tapi untuk tumbuh,
                  berbagi, dan menikmati momen.
                </p>
              </div>
            </section>

            <div className="flex justify-center">
              <div className="w-[900px] h-[400px] rounded-[20px] overflow-hidden mt-10 relative">
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  style={{width: "900px", height: "400px"}}
                >
                  <source src="/videos/aboutvideo.mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </ScrollWrapper>
  );
}
