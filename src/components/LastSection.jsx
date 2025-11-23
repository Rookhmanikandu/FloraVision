import React from "react";
import Logo from "../assets/FloraVision.png";

function LastSection() {
  return (
    <footer className="w-full bg-[#0f1b11] text-white pt-12 pb-12 mt-16">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={Logo} alt="FloraVision" className="w-12 h-auto" />
            <h2 className="text-2xl font-semibold">FloraVision.</h2>
          </div>

          <p className="text-[15px] text-gray-300 max-w-[420px]">
            From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment.
          </p>

          <div className="flex gap-6 text-lg mt-6 font-semibold tracking-wide">
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-[16px]">
            <li className="underline underline-offset-4 cursor-pointer">
              Home
            </li>
            <li className="underline underline-offset-4 cursor-pointer">
              Types Of plants
            </li>
            <li className="underline underline-offset-4 cursor-pointer">
              Contact
            </li>
            <li className="underline underline-offset-4 cursor-pointer">
              Privacy
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">For Every Update.</h3>
          <div className="flex gap-0">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 h-12 rounded-l-md pl-4 text-black outline-none"
            />
            <button className="w-36 h-12 bg-white text-black rounded-r-md font-semibold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-400 mt-8">
        FloraVision © all right reserve
      </p>
    </footer>
  );
}

export default LastSection;
