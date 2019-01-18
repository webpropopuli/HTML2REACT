import React from "react";
import img1 from "../img/ocean.jpg";
import img2 from "../img/ocean2.jpg";
import img3 from "../img/falls2.jpg";
import img4 from "../img/mountainskies.jpg";

export default ({ name }) => {
  return (
    <div className="main-container">
      <h1 className="site-name">{name}</h1>
      <img src={img1} alt="Ocean" style={{ margin: "0 auto" }} class="w3-image" width="1000" height="500" />
      <img src={img2} alt="More Ocean" class="w3-image w3-margin-top" width="1000" height="500" />
      <img src={img3} alt="Falls" class="w3-image w3-margin-top" width="1000" height="500" />
      <img src={img4} alt="Skies" class="w3-image w3-margin-top" width="1000" height="500" />
    </div>
  );
};
