import React from "react";

const Footer = () => {
  return (
    <footer className="py-16" style={{ backgroundColor: "#101727", color: "white" }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">


        <div>
          <h2 className="text-2xl font-bold mb-4">Digitools</h2>
          <p className="text-white/80">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

{/*products*/}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition">Features</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Templates</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Integrations</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Pricing</a></li>
          </ul>
        </div>

{/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Careers</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Press</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>

{/* Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition">Documentation</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Community</a></li>
          </ul>
        </div>
      </div>

{/* Bottom */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm flex flex-col md:flex-row justify-center items-center gap-4 text-white/80">
        <span>© 2026 Digitools. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-500 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition">Terms of Service</a>
          <a href="#" className="hover:text-blue-500 transition">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;