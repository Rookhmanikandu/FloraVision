import React from "react";

import AglaonemaCard from "../assets/AglonemaPlant.png";
import PlantainCard from "../assets/PlantainLilies.png";
import CactusCard from "../assets/Cactus.png";
import SansCard from "../assets/SansevieriaPlant.png";
import AgaveCard from "../assets/AgavePlant.png";

function OurTopPlants() {
  return (
    <section className="w-full flex flex-col items-center mt-32 px-4">
      {/* Heading */}
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 text-center">
        Our Top Selling Plants
      </h2>

      {/* GRID */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8 
          lg:gap-12 
          place-items-center
        "
      >
        {/* CARD 1 */}
        <img
          src={AglaonemaCard}
          className="w-[85%] sm:w-[70%] lg:w-[430px] xl:w-[480px] object-contain"
          alt="Aglaonema Plant"
        />

        {/* CARD 2 */}
        <img
          src={PlantainCard}
          className="w-[85%] sm:w-[70%] lg:w-[430px] xl:w-[480px] object-contain"
          alt="Plantain Lilies"
        />

        {/* CARD 3 */}
        <img
          src={CactusCard}
          className="w-[85%] sm:w-[70%] lg:w-[430px] xl:w-[480px] object-contain"
          alt="Cactus"
        />

        {/* CARD 4 */}
        <img
          src={PlantainCard}
          className="w-[85%] sm:w-[70%] lg:w-[430px] xl:w-[480px] object-contain"
          alt="Plantain Lilies"
        />

        {/* CARD 5 */}
        <img
          src={SansCard}
          className="w-[85%] sm:w-[70%] lg:w-[430px] xl:w-[480px] object-contain"
          alt="Sansevieria Plant"
        />

        {/* CARD 6 */}
        <img
          src={AgaveCard}
          className="w-[85%] sm:w-[70%] lg:w-[430px] xl:w-[480px] object-contain"
          alt="Agave Plant"
        />
      </div>
    </section>
  );
}

export default OurTopPlants;
