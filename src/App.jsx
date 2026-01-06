import React, { useEffect, useState } from "react";
import FullLayout from "./pages/FullLayout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const getProducts = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products`);
      console.log(res.data.products);
      const products = res.data.products;
      setAllProducts(products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    setCartProducts((prev)=>[...prev,product]);
    setCartCount((prev) => prev + 1);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      getProducts();
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="w-full max-w-7xl items-center justify-center m-auto">
      <Navbar cartCount={cartCount}/>
      <FullLayout allProducts={allProducts} isLoading={isLoading} handleAddToCart={handleAddToCart}/>
      <Footer />
    </div>
  );
};

export default App;
