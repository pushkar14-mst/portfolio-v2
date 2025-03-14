import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: window.innerWidth < 768 ? "flex-start" : "center",
        alignItems: "center",
        paddingLeft: window.innerWidth < 768 ? "20px" : "0px", // Adds left padding for mobile
      }}
    >
      <Typewriter
        options={{
          strings: [
            "Data Strategist",
            "Software Engineer",
            "Data Analyst",
            "Data Scientist",
            "Software Developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
