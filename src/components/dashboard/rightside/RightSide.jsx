import React from "react";
/* import CustomerReview from "../CustomerReview/CustomerReview"; */
import Updates from "../updatesdash/updatedash";
import "./rightside.css";
import CustomerReview from "../customerreview/CustomerReview";
const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Notificaciones</h3>
        <Updates />
      </div>
      <div>
        <h3>Estadisticas</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;