import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { images } from "../Helper/CarouselData";
// import { ArrowBackIosIcon } from '@material-ui/icons/ArrowBackIos';
import { ArrowBack } from "@material-ui/icons";
import { ArrowForward } from "@material-ui/icons";
// import axios from 'axios';
// import { ArrowForwardIosIcon } from '@material-ui/icons/ArrowForwardIos';
function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  const [data, setData ] =useState("");
  function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}
var urlString = "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details";
 
const urlParams = parseURLParams(urlString)
console.log(urlParams)
console.log(urlString)
  useEffect(()=> {
    fetch(urlParams,
      {
          method: 'GET',
          mode: 'cors',
          // body: "param=" + paramVar,
          headers: {
            'Content-Type': 'application/json'
      },
 }).then((response) => {
   response.json()
   console.log(response)
   
  });
  }, [])

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBack style={{ frontSize: 30 }} />
        </div>
        <div className="center">
          <h1>{images[currImg].Title}</h1>
          <a
            className="Learn_English"
            href="https://apps.apple.com/gb/app/capeesh-language-learning/id1390963312"
            style={{ frontSize: 30 }}
          >
            {images[currImg].subtitle}
          </a>
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForward style={{ frontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}
export default Carousel;
