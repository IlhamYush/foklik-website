"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FirstSection() {
  const [isReady, setIsReady] = useState(false); // render komponen lain setelah delay
  const [showForm, setShowForm] = useState(false);
  const [fadeClassForm, setFadeClassForm] = useState("");
  const [showIntro, setShowIntro] = useState(true);
  const [fadeClassIntro, setFadeClassIntro] = useState("opacity-100");
  const [showThanks, setShowThanks] = useState(false);
  const [fadeClassThanks, setFadeClassThanks] = useState("");
  const router = useRouter();

  // Saat pertama render, tunggu 300ms baru render komponen lain
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleBookNow = () => {
    setFadeClassIntro("opacity-0");
    setTimeout(() => {
      setShowIntro(false);
      setShowForm(true);
      setTimeout(() => {
        setFadeClassForm("opacity-100");
      }, 50);
    }, 300);
  };

  const handleBack = () => {
    setFadeClassForm("opacity-0");
    setTimeout(() => {
      setShowForm(false);
      setShowIntro(true);
      setTimeout(() => {
        setFadeClassIntro("opacity-100");
      }, 50);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFadeClassForm("opacity-0"); // fade out form
    setTimeout(() => {
      setShowForm(false);
      setShowThanks(true);
      setTimeout(() => {
        setFadeClassThanks("opacity-100"); // fade in thanks
      }, 50);

      // setelah 1.5 detik, fade out thanks dan balik ke intro
      setTimeout(() => {
        setFadeClassThanks("opacity-0"); // fade out thanks
        setTimeout(() => {
          setShowThanks(false);
          setShowIntro(true);
          setTimeout(() => {
            setFadeClassIntro("opacity-100"); // fade in intro
          }, 50);
        }, 300); // tunggu fade out thanks selesai
      }, 1500); // tahan thanks selama 1.5 detik
    }, 300); // tunggu fade out form selesai
  };

  return (
    <section className="flex flex-col overflow-hidden lg:flex-row py-5 mt-10">
      {/* Intro section selalu render dulu */}
      {showIntro && (
        <div
          className={`text-white py-10 lg:px-8 transition-opacity duration-300 ${fadeClassIntro}`}
        >
          <h1 className="text-6xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-[#113C7A] to-[#26C8E4] bg-clip-text text-transparent">
              Reserve
            </span>{" "}
            Your <br /> Ideal Holiday
          </h1>
          <p className="text-white/80 mb-4 text-2xl">Let&apos;s Get Acquainted</p>
          <div className="space-y-3">
            <p className="text-white text-lg">
              Forklik Cafe and Billiard, ruang santai untuk <br /> kumpul
              positif bareng teman, Solusi mengisi <br /> hari kosong anda
            </p>
            <button
              onClick={handleBookNow}
              className="bg-gradient-to-r from-[#1275AD] to-[#39E4E0] text-white px-6 py-3 rounded-md font-semibold text-sm hover:scale-110 transition-transform duration-300"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      )}

      {/* Form hanya render jika sudah isReady */}
      {isReady && showForm && (
        <form
          onSubmit={handleSubmit}
          className={`py-5 mt-1 px-5 space-y-4 transition-opacity duration-300 ${fadeClassForm}`}
        >
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="flex-1">
              <label className="block mb-1 text-sm text-white">
                First name
              </label>
              <input
                type="text"
                placeholder="Jane"
                className="w-full px-4 py-2 rounded-md bg-white text-black"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-sm text-white">Last name</label>
              <input
                type="text"
                placeholder="Smitherton"
                className="w-full px-4 py-2 rounded-md bg-white text-black"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm text-white">
              Email address
            </label>
            <input
              type="email"
              placeholder="email@janesfakedomain.net"
              className="w-full px-4 py-2 rounded-md bg-white text-black"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-white">
              Your message
            </label>
            <textarea
              placeholder="Enter your question or message"
              className="w-full px-4 py-2 rounded-md bg-white text-black"
              rows="4"
              required
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-300 transition-colors duration-300"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleBack}
              className="flex-1 border border-white text-white px-4 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition-colors duration-300"
            >
              Back
            </button>
          </div>
        </form>
      )}

      {/* Thanks only render if isReady */}
      {isReady && showThanks && (
        <div
          className={`text-white text-4xl font-semibold py-45 mt-1 lg:px-8 transition-opacity duration-300 ${fadeClassThanks}`}
        >
          Thanks for Reserving!
        </div>
      )}
    </section>
  );
}
