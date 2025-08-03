import React from "react";

export default function Comment() {
  return (
    <div className="relative">
      {" "}
      <div className="absolute top-0 right-20 -mt-10 z-20">
        <img
          src="/assets/bola1.png"
          alt="Background Image"
          className="w-[130px] object-cover"
        />
      </div>
      <div className="space-y-9 py-20 relative z-10">
        <h2 className="font-semibold text-white sm:text-3xl md:text-4xl mb-6">
          Comments and Feedback
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4">
          <div
            className="rounded-[20px] h-50 flex flex-col justify-between bg-[radial-gradient(circle_at_center,_#0077B2,_#54ADD0)]
"
          >
            <p className="text-white font-semibold line-clamp-3 p-10">
              "Gw main sama ortu disini dan mereka suka! bakalan balik lagi sih"
            </p>

            <div className="flex items-center p-5 ml-5 mb-2">
              <img
                src="/assets/person1.jpeg"
                alt="User Avatar"
                className="rounded-full"
                width={40}
                height={40}
              />
              <span className="text-white font-semibold ml-3">Nadir Hadd</span>
            </div>
          </div>

          <div
            className="rounded-[20px] h-50 flex flex-col justify-between bg-[radial-gradient(circle_at_center,_#0077B2,_#54ADD0)]
"
          >
            <p className="text-white font-semibold line-clamp-3 p-10">
              "Sering sering ada tournamen biliar nya dong, seru banget
              main disini!"
            </p>

            <div className="flex items-center p-5 ml-5 mb-2">
              <img
                src="/assets/person4.png"
                alt="User Avatar"
                className="rounded-full"
                width={40}
                height={40}
              />
              <span className="text-white font-semibold ml-3">Zahira Tazkia</span>
            </div>
          </div>

          <div
            className="rounded-[20px] h-50 flex flex-col justify-between bg-[radial-gradient(circle_at_center,_#0077B2,_#54ADD0)]
"
          >
            <p className="text-white font-semibold line-clamp-3 p-10">
              "Tempat nya cozy, bersih, dan pelayanan nya ramah. Mantap!"
            </p>
            <div className="flex items-center p-5 ml-5 mb-2">
              <img
                src="/assets/person3.jpg"
                alt="User Avatar"
                className="rounded-full"
                width={40}
                height={40}
              />
              <span className="text-white font-semibold ml-3">Viego Naufal</span>
            </div>
          </div>

          <div
            className="rounded-[20px] h-50 flex flex-col justify-between bg-[radial-gradient(circle_at_center,_#0077B2,_#54ADD0)]"
          >
            <p className="text-white font-semibold line-clamp-3 p-10">
              Service nya top sih! ambience nya bagus, cocok deh buat ngechill
              disini
            </p>

            <div className="flex items-center p-5 ml-5 mb-2">
              <img
                src="/assets/person2.png"
                alt="User Avatar"
                className="rounded-full"
                width={40}
                height={40}
              />
              <span className="text-white font-semibold ml-3">Ilham Yushronni</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
