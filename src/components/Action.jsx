import React from "react";

const Action = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Transform Your Workflow?
        </h2>

        <p className="text-white/90 mb-8 text-lg md:text-xl">
          Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
          <button className="btn bg-white text-blue-600 hover:bg-white/90">
            Explore Products
          </button>
          <button className="btn btn-outline text-white border-white hover:bg-white/10">
            View Pricing
          </button>
        </div>

        <p className="text-white/80 text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Action;