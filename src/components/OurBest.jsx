import React from "react";
import LeftUpper from "../assets/leftupper.png";

function OurBest() {
  return (
    <section className="w-full flex flex-col items-center mt-28 px-4">
      {/* ---- Title ---- */}
      <h2 className="text-white text-3xl sm:text-4xl font-semibold mb-10 relative">
        Our Best o2
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-20 h-[3px] bg-lime-400 rounded-full"></span>
      </h2>

      {/* ---- MAIN CARD ---- */}
      <div
        className="
          w-full max-w-[1600px]
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-[40px]
          flex flex-col lg:flex-row
          items-center gap-10
          p-6 sm:p-10 lg:p-14
        "
        style={{ boxShadow: "0 15px 40px rgba(0,0,0,0.35)" }}
      >
        {/* ---- Image ---- */}
        <div className="flex justify-center w-full lg:w-auto">
          <img
            src={LeftUpper}
            alt="O2 Plant"
            className="
              w-[250px] h-[250px]
              sm:w-[330px] sm:h-[330px]
              md:w-[380px] md:h-[380px]
              lg:w-[450px] lg:h-[450px]
              object-contain
              -mt-6 sm:-mt-10 lg:-mt-20
            "
          />
        </div>

        {/* ---- Text Content ---- */}
        <div className="flex-1 text-white text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold leading-snug">
            We Have Small And Best O2 Plants Collection’s
          </h3>

          <p className="text-emerald-100 text-sm sm:text-[15px] leading-6 mt-4 mx-auto lg:mx-0 max-w-[620px]">
            Oxygen-producing plants, often referred to as "O2 plants," are those
            that release oxygen into the atmosphere through the process of
            photosynthesis.
            <br />
            <br />
            Many plants can help filter out pollutants and toxins from the air,
            such as formaldehyde, benzene, and trichloroethylene. This makes the
            air cleaner and healthier to breathe.
          </p>

          {/* ---- Button ---- */}
          <button
            className="
              mt-6 px-8 py-2
              border border-white
              rounded-lg
              text-white
              hover:bg-white hover:text-green-900
              transition
            "
          >
            Explore
          </button>

          {/* ---- Page Controls ---- */}
          <div className="flex items-center justify-center lg:justify-between mt-8 lg:w-[180px]">
            <span className="text-white/80">01/04</span>

            <div className="flex gap-4 ml-8 lg:ml-0">
              <button className="text-white/70 hover:text-white text-xl">
                ‹
              </button>
              <button className="text-white/70 hover:text-white text-xl">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Dots ---- */}
      <div className="flex gap-2 mt-6">
        <span className="w-10 h-1 rounded-full bg-white"></span>
        <span className="w-2 h-2 rounded-full bg-white/40"></span>
        <span className="w-2 h-2 rounded-full bg-white/40"></span>
      </div>
    </section>
  );
}

export default OurBest;
