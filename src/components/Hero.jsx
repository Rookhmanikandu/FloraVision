import React from "react";
import background from "../assets/background.jpg";
import imgSmall from "../assets/leftupper.png";
import imgLarge from "../assets/leftmiddle.png";
import leftbelow from "../assets/leftbelow.png";
import FloraVision from "../assets/FloraVision.png";
import Ronnie from "../assets/Ronnie.png";
import Bag from "../assets/Bag.png";
import SearchIcon from "../assets/icon.png";

export default function Hero() {
  return (
    <header
      className="relative w-full bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-[#1A2217]/80" />

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        {/* Navbar */}
        <div className="flex items-center justify-between mb-10">
          <img src={FloraVision} alt="FloraVision" className="w-36" />

          <nav className="hidden md:flex gap-8 text-emerald-100/90 text-sm">
            <a href="#">Home</a>
            <a href="#">Plants Type</a>
            <a href="#">More</a>
            <a href="#">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <button aria-label="Search" className="hidden md:inline-flex">
              <img
                src={SearchIcon}
                alt="search"
                className="w-5 h-5 object-contain"
              />
            </button>

            <button aria-label="Search" className="hidden md:inline-flex">
              <img src={Bag} alt="search" className="w-5 h-5 object-contain" />
            </button>

            <button className="md:hidden text-white text-2xl">☰</button>
          </div>
        </div>

        {/* HERO SECTION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-7">
            {/* TITLE */}
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Earth’s Exhale
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-[#d9e8d7] text-base md:text-xl max-w-[680px]">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's
              natural environment and its essential role in sustaining life.
            </p>

            {/* BUTTONS */}
            <div className="flex items-center gap-5 mt-8">
              <button className="px-6 py-3 rounded-lg border-2 border-white text-white text-lg">
                Buy Now
              </button>

              <button className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white text-lg">
                ▶
              </button>

              <span className="text-white font-medium hidden sm:block">
                Live Demo...
              </span>
            </div>

            <div className="mt-10 w-full max-w-[420px] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
              <img
                src={Ronnie}
                alt="Ronnie"
                className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
              />

              <div>
                <p className="text-white font-semibold">Ronnie Hamill</p>
                <p className="text-yellow-400 text-sm mt-1">★★★★⯨</p>
                <p className="text-emerald-100 text-sm mt-2">
                  I can't express how thrilled I am with my new natural plants!
                  They bring such a fresh and vibrant energy to my home.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE PRODUCT CARD */}
          <div className="lg:col-span-5">
            <div className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 relative shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[220px] h-8 border-t border-white/20 rounded-full" />
              <img
                src={imgSmall}
                alt="Aglaonema"
                className="mx-auto w-full max-w-[260px] object-contain -mt-4"
              />

              <p className="text-emerald-100 text-sm mt-2 text-center">
                Indoor Plant
              </p>

              <h3 className="text-white text-2xl md:text-3xl mt-2 text-center">
                Aglaonema plant
              </h3>

              <div className="flex justify-center mt-4">
                <button className="px-6 py-2 rounded-xl border border-white text-white">
                  Buy Now
                </button>
              </div>

              <div className="flex gap-2 justify-center mt-4">
                <span className="w-8 h-2 bg-white rounded-full" />
                <span className="w-2 h-2 bg-white/60 rounded-full" />
                <span className="w-2 h-2 bg-white/60 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* DESK DECORATION SECTION */}
        <div className="mt-16 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img
              src={imgLarge}
              alt="Desk plant"
              className="w-full max-w-[350px] lg:max-w-[480px] object-contain rounded-xl"
            />

            <div className="text-white flex-1">
              <h3 className="text-2xl md:text-4xl font-semibold">
                For Your Desks Decorations
              </h3>
              <p className="text-emerald-50 mt-4 text-sm md:text-lg max-w-[700px]">
                I recently added a beautiful desk decoration plant to my
                workspace, and it has made such a positive difference!
              </p>

              <span className="text-white text-lg mt-4 inline-block">
                Rs. 599/-
              </span>

              <div className="mt-6 flex items-center gap-4">
                <button className="px-6 py-2 rounded-xl border border-white text-white">
                  Explore
                </button>
                <div className="w-12 h-12 border border-white rounded-md flex items-center justify-center">
                  <img src={Bag} alt="bag" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CARD */}
        <div className="mt-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)] flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold">
              For Your Desks Decorations
            </h3>

            <p className="text-emerald-50 mt-4 text-sm md:text-lg max-w-[700px]">
              The greenery adds a touch of nature to my desk.
            </p>

            <span className="text-white text-lg mt-4 inline-block">
              Rs. 399/-
            </span>

            <div className="mt-6 flex items-center gap-4">
              <button className="px-6 py-2 rounded-xl border border-white text-white">
                Explore
              </button>
              <div className="w-12 h-12 border border-white rounded-md flex items-center justify-center">
                <img src={Bag} alt="bag" className="w-6 h-6" />
              </div>
            </div>
          </div>

          <img
            src={leftbelow}
            alt="plant small 2"
            className="w-full max-w-[320px] lg:max-w-[440px] object-cover rounded-xl"
          />
        </div>
      </div>
    </header>
  );
}
