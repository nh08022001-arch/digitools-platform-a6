import React from "react";
import bannerImg from "../assets/banner.png"

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 px-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        
        {/*Right div */}
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Banner"
        />

        {/* Left div */}
        <div>
          <p className="font-semibold mb-2">
            New: AI-Powered Tools Available
          </p>

          <h1 className="text-5xl font-bold">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="py-6 text-gray-500">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex gap-4">
            <button className="btn btn-primary rounded-full">
              Explore Products
            </button>

            <button className="btn btn-outline rounded-full">
              Watch Demo
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;