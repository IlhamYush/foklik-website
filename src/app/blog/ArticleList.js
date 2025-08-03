import React from "react";
import Image from "next/image";

import img1 from "../assets/ArticleList1.png";
import img2 from "../assets/ArticleList2.png";
import img3 from "../assets/ArticleList3.png";
import img4 from "../assets/ArticleList4.png";

export default function ArticleList() {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 gap-4 p-10">
        <div className="row-span-2">
          <div className="relative w-full h-[700px] rounded-[20px] overflow-hidden">
            <Image
              src={img1}
              alt="Image-1"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>
          <p className="text-white font-bold mt-2">Sep 22, 2025 / Design</p>
          <p className="text-lg font-bold text-white">
            Kulineran Santai Sambil Nongkrong With Besty Tersedia di Forklik
            Cafe And Billiard
          </p>

          <div className="relative w-full h-[295px] rounded-[20px] overflow-hidden mt-2">
            <Image
              src={img2}
              alt="Image-2"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-white font-bold">Sep 22, 2025 / Design</p>
            <p className="text-lg font-bold text-white">
              Artikel Tips and Trick Memenangkan Permainan Dalam 1 Tarikan
              Pukulan
            </p>
            <div className="relative w-full h-[300px] rounded-[20px] overflow-hidden mt-2">
              <Image
                src={img3}
                alt="Image-3"
                fill
                className="object-cover rounded-[20px]"
              />
            </div>
          </div>

          <div>
            <p className="text-white font-bold">Sep 25, 2025 / Design</p>
            <p className="text-lg font-bold text-white">
              Semua yang Kamu Butuhkan untuk Nongkrong Nyaman Bareng Bestie, Ada
              di Forklik!
            </p>
            <div className="relative w-full h-[600px] rounded-[20px] overflow-hidden mt-2">
              <Image
                src={img4}
                alt="Image-4"
                fill
                className="object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
