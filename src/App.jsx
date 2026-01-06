import React from "react";
import Navbar from "./components/Navbar";
import ProductsGrid from "./components/ProductsGrid";
import NoProductFound from "./pages/NoProductFound";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full max-w-7xl items-center justify-center m-auto">
      <div className="flex flex-col gap-8">
        <Navbar />
        <Banner />
        <ProductsGrid />
        {/* <NoProductFound /> */}
        {/* <CartPage /> */}
        {/* <ErrorPage /> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
