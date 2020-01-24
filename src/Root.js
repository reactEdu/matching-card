import React, { useRef, useEffect } from 'react';
import App from './App';

const Root = () => {
  const spinnerRef = useRef()
  useEffect(() => {
    setTimeout(() =>{
      // console.log("dom loaded", spinnerRef.current);
      spinnerRef.current.style.display="none";
      document.querySelector('body').style.position="static";
    },3000)
  }, []);

  return (
    <>
      <div className="spinner" ref={spinnerRef}>
        <svg viewBox="0 0 300 200">
          <defs>
            <clipPath id="letter-s-mask">
              <path d="M34.835,110.589c0, 0,5.03,5.787,11.852,5.787c3.719,0,7.027-1.998,7.027-5.787c0-8.339-23.013-7.648-23.013-22.876c0-7.926,6.89-13.779,16.329-13.779c5.718,0,14.538,2.684,14.538,9.644v4.55h-8.13V85.92c0-2.273-3.238-3.789-6.477-3.789c-4.134,0-7.165,2.137-7.165,5.237c0,8.336,23.011,6.685,23.011,22.739c0,7.785-5.994,14.401-16.259,14.401c-10.818,0-16.812-7.58-16.812-7.58L34.835,110.589z"></path>
            </clipPath>
            <clipPath id="letter-u-mask">
              <path d="M103.985,75.167h-0.401h-4.679l-0.006,31.144c0,6.475-4.066,10.197-10.198,10.197c-6.133,0-10.197-3.721-10.197-10.13V75.167h-4.686h-0.393h-3.948v31.486c0,10.82,7.647,18.261,19.292,18.261c11.507,0,19.155-7.441,19.155-18.261l0.008-31.486H103.985z"></path>
            </clipPath>
            <clipPath id="letter-p1-1-mask">
              <path d="M127.65,82.81v41.28h-9.03V82.81H127.65z"></path>
            </clipPath>
            <clipPath id="letter-p1-2-mask">
              <path d="M152.11,91.08c0,9.51-6.41,16.13-15.57,16.13h-9.227v-7.72h7.578c5.09,0,7.99-3.31,7.99-8.41c0-5.03-2.9-8.27-7.86-8.27h-20.88v-7.64h22.4C145.7,75.17,152.11,81.58,152.11,91.08z"></path>
            </clipPath>
            <clipPath id="letter-p2-1-mask">
              <path d="M169.34,82.81v41.28h-9.03V82.81H169.34z"></path>
            </clipPath>
            <clipPath id="letter-p2-2-mask">
              <path d="M193.8,91.08c0,9.51-6.41,16.13-15.57,16.13h-9.227v-7.72h7.578c5.09,0,7.99-3.31,7.99-8.41c0-5.03-2.9-8.27-7.86-8.27h-20.88v-7.64h22.4C187.39,75.17,193.8,81.58,193.8,91.08z"></path>
            </clipPath>
            <clipPath id="letter-l-mask">
              <path d="M232.93,111.96v7.44c0,3.31-1.38,4.69-4.68,4.69h-21.57c-3.3,0-4.68-1.38-4.68-4.69V84.33c0-0.96-0.55-1.52-1.52-1.52h-2.96v-7.64h8.82c3.31,0,4.68,1.44,4.68,4.68v35.07c0,0.97,0.55,1.52,1.52,1.52h10.68c0.96,0,1.52-0.55,1.52-1.52v-2.96H232.93z"></path>
            </clipPath>
            <clipPath id="letter-e-1-mask">
              <path d="M268.0800171,79.8499756v7.4400024h-8.2000122v-2.960022c0-0.9599609-0.5499878-1.5199585-1.5200195-1.5199585h-24.5299683v-7.6400146h29.5599976C266.6300049,75.1699829,268.0800171,76.6099854,268.0800171,79.8499756z"></path>
            </clipPath>
            <clipPath id="letter-e-2-mask">
              <path d="M269.87,111.96v7.44c0,3.31-1.45,4.69-4.69,4.69H243c-3.31,0-4.69-1.38-4.69-4.69V82.76h9.03v32.16c0,0.97,0.55,1.52,1.51,1.52h11.3c0.97,0,1.52-0.55,1.52-1.52v-2.96H269.87z"></path>
            </clipPath>
            <clipPath id="letter-e-3-mask">
              <path d="M263.19,95.63v7.65h-15.98v-7.65H263.19z"></path>
            </clipPath>
          </defs>
          <path
            className="letter letter--s"
            clipPath="url(#letter-s-mask)"
            d="M58,88.5c0.181-5.833-2-10.013-11.167-10c-6.039,0.009-11.25,1.5-11.583,9.583C34.844,97.93,54.867,98.581,58.036,107c2.41,6.403-3.619,13.47-10.449,13.423c-5.031-0.034-10.396-2.116-15.837-7.34"
          ></path>
          <path
            className="letter letter--u"
            clipPath="url(#letter-u-mask)"
            d="M74.042,74.333c0,30.417-3.958,46.5,14.625,46.5s14.776-16.755,14.71-46.271"
          ></path>
          <path
            className="letter letter--p1-1"
            clipPath="url(#letter-p1-1-mask)"
            d="M123.135,124.09V82.81"
          ></path>
          <path
            className="letter letter--p1-2"
            clipPath="url(#letter-p1-2-mask)"
            d="M114.14,79c22.922,0,33.339-1.688,33.339,12.19c0,12.435-10.292,12.185-20.167,12.185"
          ></path>
          <path
            className="letter letter--p2-1"
            clipPath="url(#letter-p2-1-mask)"
            d="M164.825,124.09V82.81"
          ></path>
          <path
            className="letter letter--p2-2"
            clipPath="url(#letter-p2-2-mask)"
            d="M155.83,79c22.922,0,33.339-1.688,33.339,12.19c0,12.435-10.292,12.185-20.167,12.185"
          ></path>
          <path
            className="letter letter--l"
            clipPath="url(#letter-l-mask)"
            d="M197.52,78.935c7.105,0,9.063,0.752,9.063,7.229c0,7.583,0,21.671,0,28.838c0,5.539,3.851,5.498,8.919,5.498c2.987,0,5.3,0,7.311,0c6.063,0,5.938-8.618,5.938-8.618"
          ></path>
          <path
            className="letter letter--e-1"
            clipPath="url(#letter-e-1-mask)"
            d="M233.8300171,79.125c0,0,18.0449829,0,24.1699829,0c5.3125,0,6,1.375,6,8.164978"
          ></path>
          <path
            className="letter letter--e-2"
            clipPath="url(#letter-e-2-mask)"
            d="M242.958,82.76c0,0,0,25.075,0,32.242c0,5.539,3.851,5.498,8.919,5.498c2.987,0,5.904,0,7.915,0c6.063,0,5.938-8.618,5.938-8.618"
          ></path>
          <path
            className="letter letter--e-3"
            clipPath="url(#letter-e-3-mask)"
            d="M247.208,99.455h15.982"
          ></path>
        </svg>
      </div>
      <App />
    </>
  );
};

export default Root;