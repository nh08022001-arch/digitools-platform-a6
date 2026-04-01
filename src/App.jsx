import './App.css';
import { useState } from "react";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductsSection from './components/ProductsSection';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} />
      <Banner />
      <Stats />
      <ProductsSection cart={cart} setCart={setCart} />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;