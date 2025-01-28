import React from "react";
import videoFile from "../assets/videos/3959035-uhd_4096_2160_25fps.mp4";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar Navtitle="News Headlines" />
      <div
        style={{
          position: "relative",
          height: "100vh", // Full height of the viewport
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Background Video */}
        <video
          src={videoFile}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the video covers the entire container
            zIndex: -1, // Makes sure the video stays in the background
          }}
          autoPlay
          loop
          muted
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            color: "white",
            paddingTop: "20px",
          }}
        >
          <h1>We Deliver the News That Matters, When It Matters. </h1>
        </div>
      </div>
    </>
  );
}

export default About;
