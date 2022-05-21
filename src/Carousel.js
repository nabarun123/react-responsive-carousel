import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src="https://i.imgur.com/pgCzueK.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src="‪https://i.imgur.com/pgCzueK.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src="https://i.imgur.com/pgCzueK.jpg" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img alt="" src="https://i.imgur.com/d5aiXJP.jpg" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img alt="" src="https://i.imgur.com/pgCzueK.jpg" />
      <p className="legend">Legend 5</p>
    </div>
  </Carousel>
);
