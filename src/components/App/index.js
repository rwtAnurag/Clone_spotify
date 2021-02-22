import React from "react";
import './App.css';
import Navbar from "../Navbar";
import Main from "../Main"

function App() {
  return (
    <div className="overWrap">
        <div className="App">
        <Navbar/>
        <Main/>
        </div>
      
        <div className="musicControls">
        music Controls
        </div>
    </div>
  );
}

export default App;
