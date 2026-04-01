import React from "react";

const plans = [
  {
    name: "Starter",
    price: "$0/month",
    description: "Perfect for getting started",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29/month",
    description: "Best for professionals",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Unlimited projects",
      "Community support",
    ],
    buttonText: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99/month",
    description: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Priority support",
      "Custom integrations",
      "Dedicated support",
      "Cloud sync",
      "SLA guarantee",
      "Advanced analytics",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mb-12">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const isPro = plan.popular;

            return (
              <div
                key={index}
                className={`relative p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col ${
                  isPro
                    ? "bg-blue-600 text-white"
                    : "bg-base-200 text-gray-900"
                }`}
              >
                {isPro && (
                  <div className="absolute top-0 right-0 bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-xl font-semibold mb-2 ${isPro ? "text-white" : ""}`}>{plan.name}</h3>
                <p className={`mb-4 ${isPro ? "text-white/90" : "text-gray-500"}`}>{plan.description}</p>
                <p className={`text-3xl font-bold mb-6 ${isPro ? "text-white" : ""}`}>{plan.price}</p>
                <ul className={`mb-6 space-y-2 text-left ${isPro ? "text-white/90" : ""}`}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-auto btn ${
                    isPro
                      ? "bg-white text-blue-600 hover:bg-white/90"
                      : "btn-primary"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;