import React from "react";
import Image from "next/image";
import gambar13 from "../assets/bola8.png";

export default function SecondSection() {
  return (
    <section className="py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-lg font-bold text-black mb-2">Subheading</h2>
              <p className="text-gray-600">
                Tempat terbaik bukan hanya soal menu atau dekorasi—tapi soal
                rasa nyaman dan koneksi yang tercipta. Forklik menghadirkan
                keduanya dalam satu ruang.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-black mb-2">Subheading</h2>
              <p className="text-gray-600">
                Forklik tidak hanya jadi tempat santai, tapi juga ruang untuk
                ide-ide tumbuh. Dari tugas kuliah, brainstorming, hingga diskusi
                komunitas, semua punya tempatnya di sini.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-2 rounded">
                Button
              </button>
              <button className="bg-gray-200 text-black px-6 py-2 rounded">
                Secondary button
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <Image
              src={gambar13}
              alt="gambar13"
              width={560}
              height={584}
              className="rounded object-cover"
            />
          </div>
        </div>
    </section>
  );
}
