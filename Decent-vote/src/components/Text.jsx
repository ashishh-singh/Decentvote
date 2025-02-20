import React from "react";
import Typed from "react-typed";
import "./Text.css";

function Text() {
  return (
    
      <div className="animated-typing">
        <Typed
          strings={[
            "Decent-Vote",
            "Best-Platform",
            "Decentralized Fast And Secure",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
    </div>
  );
}
export default Text;