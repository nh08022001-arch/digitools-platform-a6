import React from "react";
import { FiUser, FiPackage, FiPlayCircle } from "react-icons/fi";

const steps = [
  {
    id: "01",
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
    icon: <FiUser size={32} className="text-primary" />
  },
  {
    id: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: <FiPackage size={32} className="text-primary" />
  },
  {
    id: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: <FiPlayCircle size={32} className="text-primary" />
  }
];

const StepsSection = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header div*/}
        <h2 className="text-4xl font-bold mb-4">Get Started in 3 Steps</h2>
        <p className="text-gray-500 mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Steps div */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
              <div className="mb-4 font-bold text-2xl text-primary">{step.id}</div>
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;