import React from "react";
import Image from "next/image";

import gbr1 from "../assets/bg2.png";
import button1 from "../assets/button1.png";

export default function ContentFacility() {
  return (
    <div className="flex justify-center items-center gap-10 py-10">
      <div className="bg-gradient-to-tl from-blue-950 via-gray-900 to-gray-700 rounded-[50px] p-4 h-[300px] w-[250px]">
        <div className=" flex justify-center">
          <div className="relative overflow-hidden w-full h-[150px]">
            <Image
              src={gbr1}
              alt="alt 1"
              className="rounded-[30px] object-cover"
              fill
            />
          </div>
        </div>
        <div className="flex justify-between items-center p-3">
          <p className="text-white text-md font-bold">Cafe Area</p>

          <Image src={button1} alt="button" width={50} />
        </div>
      </div>

      <div className="bg-gradient-to-tl from-blue-950 via-gray-900 to-gray-700 rounded-[50px] p-4 h-[300px] w-[250px]">
        <div className=" flex justify-center">
          <div className="relative overflow-hidden w-full h-[150px]">
            <Image
              src={gbr1}
              alt="alt 1"
              className="rounded-[30px] object-cover"
              fill
            />
          </div>
        </div>
        <div className="flex justify-between items-center p-3">
          <p className="text-white text-md font-bold">Cafe Area</p>

          <Image src={button1} alt="button" width={50} />
        </div>
      </div>

      <div className="bg-gradient-to-tl from-blue-950 via-gray-900 to-gray-700 rounded-[50px] p-4 h-[300px] w-[250px]">
        <div className=" flex justify-center">
          <div className="relative overflow-hidden w-full h-[150px]">
            <Image
              src={gbr1}
              alt="alt 1"
              className="rounded-[30px] object-cover"
              fill
            />
          </div>
        </div>
        <div className="flex justify-between items-center p-3">
          <p className="text-white text-md font-bold">Cafe Area</p>

          <Image src={button1} alt="button" width={50} />
        </div>
      </div>

      <div className="bg-gradient-to-tl from-blue-950 via-gray-900 to-gray-700 rounded-[50px] p-4 h-[300px] w-[250px]">
        <div className=" flex justify-center">
          <div className="relative overflow-hidden w-full h-[150px]">
            <Image
              src={gbr1}
              alt="alt 1"
              className="rounded-[30px] object-cover"
              fill
            />
          </div>
        </div>
        <div className="flex justify-between items-center p-3">
          <p className="text-white text-md font-bold">Cafe Area</p>

          <Image src={button1} alt="button" width={50} />
        </div>
      </div>
    </div>
  );
}
