import React from "react";

const statsData = [
  { value: "50K+", label: "Active Users" },
  { value: "200+", label: "Premium Tools" },
  { value: "4.9", label: "Rating" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                {stat.value}
              </h2>
              <p className="mt-2 text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;