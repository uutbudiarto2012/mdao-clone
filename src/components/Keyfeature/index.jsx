import "./Keyfeature.scss";
import { GiCursedStar } from "react-icons/gi";
import Card from "./Card";

const Keyfeature = () => {
  return (
    <div className="section-container px-5 sm:px-24">
      <div className="section-header">
        <h2 className="title">KEY FEATURE</h2>
      </div>
      <div className="section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Keyfeature;
