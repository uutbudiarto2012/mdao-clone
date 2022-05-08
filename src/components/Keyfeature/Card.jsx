import React from "react";
import { GiCursedStar } from "react-icons/gi";

const Card = () => {
  return (
    <div className="card-feature">
      <div className="card-header">
        <div className="icon">
          <GiCursedStar />
        </div>
        <div className="title-header">Title Name</div>
      </div>
      <div className="card-body">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          nobis fugiat reprehenderit adipisci fugit natus accusantium sed
          dignissimos quidem labore.
        </p>
      </div>
      <div className="card-footer">
        <button className="btn-app">Launc App</button>
        <div className="link-more">Learn More...</div>
      </div>
    </div>
  );
};

export default Card;
