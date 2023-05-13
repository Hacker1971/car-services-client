import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "./components/shared/Banner";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <div>
      <Banner />
      <div className="min-h-[calc(100vh-325px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default App;
