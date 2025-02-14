import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main_container from "./components/Main_container";

function Body() {
  return (
    <div className="container">
      <Header />
      <div className="heder-side">
        <Sidebar />
        <Main_container />
      </div>

      <Footer />
    </div>
  );
}

export default Body;
