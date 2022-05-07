import React from "react";
import "./Home.css";
import Carousel from "./Components/Carousel";
export const Home = () => {
  return (
    <div >
      <Carousel />
      <div id = "middle-div">Loading .....</div>
    </div>
  
    
    // <div class="carousel">
    //   {/* <img class="carousel-image" src={headerImage} /> */}
    //   <div class="fill">
    //     <img src="https://picsum.photos/id/237/320/240" alt="" />
    //   </div>
    //   <div class="carousel-cell">text here</div>
    //   <div class="carousel-cell">text here</div>
    //   <div class="carousel-cell">text here</div>
    // </div>
  );
};
