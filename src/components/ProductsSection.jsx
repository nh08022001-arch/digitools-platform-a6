import React, { useEffect, useState } from "react";
import * as FiIcons from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const tagColors = {
  "best-seller": "bg-purple-500",
  "popular": "bg-blue-500",
  "new": "bg-green-500"
};

const ProductsSection = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

      {/* For add product to cart */}
  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`${product.name} added to cart!`);
    setActiveTab("cart");
  };

      {/* Remove item from cart */}
  const removeItem = (id) => {
    const removedItem = cart.find(item => item.id === id);
    setCart(prev => prev.filter(item => item.id !== id));
    toast.warn(`${removedItem.name} removed from cart`);
  };

      {/* For checkout */}
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.info("Your cart is empty!");
      return;
    }
    toast.success("Checkout successful!");
    setCart([]);
  };

  return (
      <section className="py-20 bg-base-100">
       <div className="max-w-7xl mx-auto px-6">
        {/* toggle buttons and header*/}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 mb-6">
            Choose from our curated collection of premium digital products.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("products")}
              className={`btn ${activeTab === "products" ? "btn-primary" : "btn-outline"}`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`btn ${activeTab === "cart" ? "btn-primary" : "btn-outline"}`}
            >
              Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
            </button>
          </div>
        </div>

        {/* Products List */}
          {activeTab === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => {
              const Icon = FiIcons[product.icon];
              return (
                <div key={product.id} className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                  {product.tag && (
                    <span className={`text-xs text-white px-3 py-1 rounded-full ${tagColors[product.tagType] || "bg-gray-400"}`}>
                      {product.tag}
                    </span>
                  )}
                  {Icon && <Icon className="text-primary my-3" size={24} />}
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-500 text-sm my-2">{product.description}</p>
                  <p className="font-bold mb-3">
                    ${product.price}
                  </p>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })}
             </div>
        )}

        {/* Cart List */}
          {activeTab === "cart" && (
           <div className="max-w-2xl mx-auto space-y-4">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty 🛒</p>
            ) : (
              <>
                {cart.map(item => {
                  const Icon = FiIcons[item.icon];
                  return (
                    <div key={item.id} className="flex items-center justify-between bg-base-200 p-4 rounded-lg">
                      <div className="flex items-center gap-4">
                        {Icon && <Icon size={20} />}
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-gray-500">${item.price}</p>
                        </div>
                      </div>
                      <button
                        className="btn btn-error btn-sm"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
                <button
                  className="btn btn-primary w-full mt-6"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </>
            )}
           </div>
         )}
        </div>
     </section>
    );
 };

export default ProductsSection;