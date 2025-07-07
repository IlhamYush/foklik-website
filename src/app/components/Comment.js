import React from "react";
import Image from "next/image";

import profil1 from "../assets/logoProfile.png";

export default function Comment() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="font-semibold text-black sm:text-3xl md:text-4xl mb-6">
        Comments and Feedback
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4">
        {/* Comment 1 */}
        <div className="p-4 border border-gray-300 rounded-lg h-42 flex flex-col justify-between">
          <p className="text-gray-700 line-clamp-3">
            This is another more sample comment. And this one is too long just
            to test how it behaves when overflowing the container or exceeding
            the height limit.
          </p>

          <div className="flex items-center pt-4">
            <Image
              src={profil1}
              alt="User Avatar"
              className="rounded-full"
              width={40}
              height={40}
            />
            <span className="font-semibold ml-3">Third User</span>
          </div>
        </div>

        {/* Comment 2 */}
        <div className="p-4 border border-gray-300 rounded-lg h-42 flex flex-col justify-between">
          <p className="text-gray-700 line-clamp-3">
            This is another more sample comment. And this one is too long just
            to test how it behaves when overflowing the container or exceeding
            the height limit.
          </p>

          <div className="flex items-center pt-4">
            <Image
              src={profil1}
              alt="User Avatar"
              className="rounded-full"
              width={40}
              height={40}
            />
            <span className="font-semibold ml-3">Third User</span>
          </div>
        </div>

        {/* Comment 3 */}
        <div className="p-4 border border-gray-300 rounded-lg h-42 flex flex-col justify-between">
          {/* Komentar: dipotong 2 baris */}
          <p className="text-gray-700 line-clamp-3">
            This is another more sample comment. And this one is too long just
            to test how it behaves when overflowing the container or exceeding
            the height limit.
          </p>

          {/* Avatar & Nama di bawah */}
          <div className="flex items-center pt-4">
            <Image
              src={profil1}
              alt="User Avatar"
              className="rounded-full"
              width={40}
              height={40}
            />
            <span className="font-semibold ml-3">Third User</span>
          </div>
        </div>
        {/* Comment 4 */}
        <div className="p-4 border border-gray-300 rounded-lg h-42 flex flex-col justify-between">
          {/* Komentar: dipotong 2 baris */}
          <p className="text-gray-700 line-clamp-3">
            This is another more sample comment. And this one is too long just
            to test how it behaves when overflowing the container or exceeding
            the height limit.
          </p>

          {/* Avatar & Nama di bawah */}
          <div className="flex items-center pt-4">
            <Image
              src={profil1}
              alt="User Avatar"
              className="rounded-full"
              width={40}
              height={40}
            />
            <span className="font-semibold ml-3">Forth User</span>
          </div>
        </div>
      </div>
    </div>
  );
}
