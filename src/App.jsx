import React, { useEffect, useState } from "react";
import CartModelBox from "./components/CartModelBox";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Products from "./components/Products";
import Search from "./components/Search";

export default function App() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const fullScreen = () => {
    let app = document.documentElement;

    if (isFullScreen) {
      // If already in fullscreen, exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      // If not in fullscreen, request fullscreen
      if (app.requestFullscreen) {
        app.requestFullscreen();
      } else if (app.mozRequestFullScreen) {
        app.mozRequestFullScreen();
      } else if (app.webkitRequestFullscreen) {
        app.webkitRequestFullscreen();
      } else if (app.msRequestFullscreen) {
        app.msRequestFullscreen();
      }
    }

    // Toggle the state to reflect the current fullscreen status
    setIsFullScreen(!isFullScreen);
  };

    useEffect(()=>{
      fullScreen
    } ,[])
  return (
    <div className="App">
      {/* <button onClick={fullScreen} className=" absolute">Toggle Full Screen</button> */}
      <CartModelBox />
      <Header />
      <Search />
      <Filter />
      <Products />
    </div>
  );
}
