import React from "react";
import Image from "next/image";

import learn1 from "../assets/bg2.png";
import learn2 from "../assets/bg2.png";
import learn3 from "../assets/bg2.png";
import learn4 from "../assets/bg2.png";

const images = [
  { src: learn1, alt: "learn1" },
  { src: learn2, alt: "learn2" },
  { src: learn3, alt: "learn3" },
  { src: learn4, alt: "learn4" },
];

const sections = [
  {
    title: "Bermain Lebih dari Sekadar Permainan",
    text: `Forklik bukan cuma tempat buat adu keahlian biliar, tapi tempat buat
    belajar, sharing teknik, dan menikmati tiap momen di atas meja. Baik
    kamu baru pertama kali megang stik atau sudah pro, kamu akan merasa
    diterima dan dilibatkan dalam suasana yang seru dan suportif. Ada
    rasa puas yang nggak terganti saat bola masuk — apalagi kalau bareng
    temen.`,
  },
  {
    title: "Tempat Nongkrong yang Beneran Nyaman",
    text: `Kami tahu pentingnya ruang yang bikin rileks. Di Forklik, kamu bisa
    duduk santai sambil menikmati kopi pilihan, makanan ringan yang
    menggugah selera, dan suasana yang tenang tapi tetap hidup. Interior
    kami didesain buat ngobrol, kerja ringan, atau sekadar melarikan
    diri dari rutinitas. Nongkrong nggak harus bising — yang penting
    nyaman.`,
  },
  {
    title: "Suasana yang Bikin Pengen Balik Lagi",
    text: `Forklik diciptakan untuk jadi tempat pelarian dari hari yang
    padat. Musik chill, pencahayaan hangat, dan tawa di setiap sudut
    bikin suasana di sini selalu akrab. Sering ada turnamen kecil, acara
    komunitas, dan momen spontan yang bikin Forklik terasa hidup. Bukan
    cuma tempat main, tapi tempat membangun cerita.`,
  },
];

export default function LearntoUs() {
  return (
    <div className="py-10 space-y-10">
      <div className="flex justify-center gap-10 flex-wrap">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-[270px] h-[270px] rounded-[10px] overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              className="object-cover rounded-[10px]"
            />
          </div>
        ))}
      </div>

      <h2 className="text-4xl text-white font-bold text-center">
        Learn To Play With Us
      </h2>

      <div className="flex justify-center gap-20 flex-wrap">
        {sections.map((section, index) => (
          <div key={index} className="space-y-5 text-center max-w-[320px]">
            <p className="text-lg font-bold text-white">{section.title}</p>
            <p className="text-md text-white">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
