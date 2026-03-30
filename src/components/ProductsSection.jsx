import React, { useEffect, useState } from "react";
import * as FiIcons from "react-icons/fi";

const tagColors = {
  "best-seller": "bg-purple-500",
  "popular": "bg-blue-500",
  "new": "bg-green-500"
};

const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔹 Header div */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button className="btn btn-primary">Products</button>
            <button className="btn btn-outline">Cart (2)</button>
          </div>
        </div>

        {/* 🔹 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = FiIcons[product.icon];

            return (
              <div
                key={product.id}
                className="bg-base-200 rounded-xl p-6 shadow-md hover:shadow-xl flex flex-col"
              >
                {/* Tag */}
                <span
                  className={`text-xs text-white px-3 py-1 rounded-full w-max mb-3 ${tagColors[product.tagType]}`}
                >
                  {product.tag}
                </span>

                {/* Icon */}
                {Icon && (
                  <Icon className="text-primary mb-3" size={26} />
                )}

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-4 flex-1">
                  {product.description}
                </p>

                {/* Price */}
                <p className="text-lg font-bold mb-4">
                  ${product.price}
                  {product.period === "monthly" && "/mo"}
                  {product.period === "yearly" && "/yr"}
                  {product.period === "one-time" && "/one-time"}
                </p>

                {/* Features */}
                <ul className="text-sm text-gray-600 space-y-1 mb-5">
                  {product.features.slice(0, 5).map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

                {/* Button */}
                <button className="btn btn-primary mt-auto rounded-full">
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;