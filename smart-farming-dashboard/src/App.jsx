import { useState } from "react";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/Fotter/Footer";
import CropList from "./components/content/content";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar />
      </div>
      <CropList />
      <div className="copy-right">
        <Footer />
      </div>
    </div>
  );
}

export default App;
