import React from "react";
import Image from "next/image";

import galeri1 from "../assets/ArticleList1.png";

export default function Gallery() {
  return (
    <section className="flex flex-col mt-10 items-center gap-10 lg:flex-row">
      <div>
        <h1 className="font-bold mb-5 text-4xl">Gallery</h1>

        <p className="text-black text-2xl mb-1 font-semibold">Suasana Nyaman</p>
        <p className="text-black mb-5 text-lg">
          Forklik dirancang dengan sentuhan urban yang cozy pencahayaan hangat,
          interior modern, dan nuansa santai yang bikin betah dari siang sampai
          malam
        </p>

        <p className="text-black text-2xl mb-1 font-semibold">Aktivitas Seru</p>

        <p className="text-black text-lg">
          Mulai dari main billiard, Momen bersama komunitas, hingga turnamen
          kecil antar kampus, galeri ini menangkap momen-momen seru yang hanya
          bisa kamu rasakan di Forklik.
        </p>
      </div>

      <div className="relative w-full h-[600px] mt-10 overflow-hidden rounded-[20px]">
        <Image
          src={galeri1}
          alt="Gallery Image 1"
          fill
          className="object-cover rounded-[20px]"
        />
      </div>
    </section>
  );
}
