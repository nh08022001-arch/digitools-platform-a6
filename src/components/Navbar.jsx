import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-6 sticky top-0 z-50">

      {/* For Logo */}
      <div className="navbar-start">
        <a className="text-2xl font-bold text-primary cursor-pointer">
          DigiTools
        </a>
      </div>

      {/*Menu items */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 font-medium">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      {/* Right buttons */}
      <div className="navbar-end gap-3">
        <button className="btn btn-ghost btn-circle">
          <FiShoppingCart size={20} />
        </button>

        <div className="hidden lg:flex gap-3">
          <button className="btn btn-ghost">Login</button>
          <button className="btn btn-primary">Get Started</button>
        </div>

        {/* For mobile*/}
        <div className="lg:hidden">
          <details className="dropdown dropdown-end">
            <summary className="btn btn-ghost btn-circle">
              ☰
            </summary>
            <ul className="menu dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>

              <div className="divider"></div>

              <li><a>Login</a></li>
              <li>
                <a className="btn btn-primary text-white mt-2">
                  Get Started
                </a>
              </li>
            </ul>
          </details>
        </div>

      </div>

    </div>
  );
};

export default Navbar;