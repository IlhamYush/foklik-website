import React from "react";
import Image from "next/image";

import gambar1 from "../assets/foto1.jpg";
import gambar2 from "../assets/foto2.jpg";
import gambar3 from "../assets/foto3.png";

export default function SecondSection() {
  const cards = [
    { id: 1, image: gambar1, title: "Lights & Lines" },
    { id: 2, image: gambar2, title: "Ready to Break" },
    { id: 3, image: gambar3, title: "Billiard Lounge" },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5 w-[130vh]">
      {cards.map((card) => (
        <div
          key={card.id}
          className="p-3 bg-gradient-to-tl from-blue-950 via-gray-900 to-blue-950 rounded-[20px]"
        >
          <div className="relative group w-full h-[300px] rounded-[10px] overflow-hidden cursor-pointer">
            <Image
              src={card.image}
              alt={card.title}
              className="object-cover group-hover:scale-105 transition-transform duration-400"
              fill
            />
            <div className="bg-gradient-to-l from-blue-950 via-gray-900 to-blue-950 absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
              <p className="text-white text-lg font-bold text-center">
                {card.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
