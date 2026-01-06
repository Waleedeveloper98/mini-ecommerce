import React, { useEffect, useState } from "react";
import FullLayout from "./pages/FullLayout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";
import { Outlet } from "react-router-dom";

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
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
    setCartProducts((prevItem) => {
      const existingItem = prevItem.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItem.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
      return [...prevItem, { ...product, quantity: 1 }];
    });
  };

  const cartCount = cartProducts.reduce(
    (total, item) => total + item.quantity,
    0
  );
  useEffect(() => {
    getProducts();
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-7xl items-center justify-center m-auto">
      <Navbar cartCount={cartCount} />
       <Outlet
        context={{
          allProducts,
          isLoading,
          handleAddToCart,
          cartProducts,
        }}
      />
      <Footer />
    </div>
  );
};

export default App;
