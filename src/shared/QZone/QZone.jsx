import React from "react";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const QZone = () => {
  return (
    <div>
      <div className="mb-4 p-4 bg-secondary bg-opacity-10">
        <h5>Q Zone</h5>
        <img className="w-100 my-2" src={qZone1} alt="" />
        <img className="w-100 my-2" src={qZone2} alt="" />
        <img className="w-100 my-2" src={qZone3} alt="" />
      </div>

    </div>
  );
};

export default QZone;
