import React from "react";

import Navbar from "../components/Navbar";
import ContentFacility from "./content1";
import LearntoUs from "./LearntoUs";
import Footer from "../components/Footer";
import ScrollWrapper from "../components/ScrollWrapper";

export default function Facility() {
  return (
    <ScrollWrapper>
      <main>
        <div className="bg-gradient-to-b from-black/90 via-[#04408D] to-black">
          <div className="relative z-10 mx-10 px-4 py-5 sm:px-6 lg:px-8">
            <Navbar />

            <div className="p-10">
              <ContentFacility />

              <LearntoUs />
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </ScrollWrapper>
  );
}
