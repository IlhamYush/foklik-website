import React from "react";

import Navbar from "../components/Navbar";
import ContentFacility from "./content1";
import LearntoUs from "./LearntoUs";
import Footer from "../components/Footer";


export default function Facility() {
  return (
    <main>
      <div className="bg-gradient-to-b from-[#113F67] via-gray-800 to-black">
        <div className="relative z-10 mx-10 px-4 py-5 sm:px-6 lg:px-8">
          <Navbar />

          <div className="px-10">
            <ContentFacility />

            <LearntoUs />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
