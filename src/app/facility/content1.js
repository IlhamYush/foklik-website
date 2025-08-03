import React from "react";

export default function ContentFacility() {
  return (
    <div>
      <div className="flex justify-center items-center gap-10 py-10 z-10 relative">
        <div className="bg-gradient-to-tl from-blue-950 via-gray-900 to-gray-700 rounded-[50px] p-4 h-[300px] w-[250px]">
          <div className=" flex justify-center">
            <div className="relative overflow-hidden w-full h-[160px] rounded-[30px]">
              <img
                src="/assets/facil1.png"
                alt="alt 1"
                className="w-full h-full rounded-[30px] object-cover"
              />
            </div>
          </div>
          <div className="flex justify-between items-center p-3">
            <p className="text-white text-md font-bold">Cafe Area</p>

            <img src="/assets/button1.png" alt="button" width={50} />
          </div>
        </div>

        <div className="bg-gradient-to-tl from-blue-950 via-gray-900 to-gray-700 rounded-[50px] p-4 h-[300px] w-[250px]">
          <div className=" flex justify-center">
            <div className="relative overflow-hidden w-full h-[160px]">
              <img
                src="/assets/facil2.jpg"
                alt="alt 2"
                className="w-full h-full rounded-[30px] object-cover"
              />
            </div>
          </div>
          <div className="flex justify-between items-center p-3">
            <p className="text-white text-md font-bold">Billiar Area</p>

            <img src="/assets/button1.png" alt="button" width={50} />
          </div>
        </div>

        <div className="bg-gradient-to-tl from-blue-950 via-gray-900 to-gray-700 rounded-[50px] p-4 h-[300px] w-[250px]">
          <div className=" flex justify-center">
            <div className="relative overflow-hidden w-full h-[160px]">
              <img
                src="/assets/facil3.png"
                alt="alt 3"
                className="w-full h-full rounded-[30px] object-cover"
              />
            </div>
          </div>
          <div className="flex justify-between items-center p-3">
            <p className="text-white text-md font-bold">Games Area</p>

            <img src="/assets/button1.png" alt="button" width={50} />
          </div>
        </div>

        <div className="bg-gradient-to-tl from-blue-950 via-gray-900 to-gray-700 rounded-[50px] p-4 h-[300px] w-[250px]">
          <div className=" flex justify-center">
            <div className="relative overflow-hidden w-full h-[160px]">
              <img
                src="/assets/facil4.png"
                alt="alt 4"
                className="w-full h-full rounded-[30px] object-cover"
                
              />
            </div>
          </div>
          <div className="flex justify-between items-center p-3">
            <p className="text-white text-md font-bold">Smoking Area</p>

            <img src="/assets/button1.png" alt="button" width={50} />
          </div>
        </div>
      </div>
      <div className="relative -mt-15 z-0 overflow-hidden">
        <img src="/assets/mejafacility.png" alt="meja" className="object-cover w-full" />
      </div>
    </div>
  );
}
