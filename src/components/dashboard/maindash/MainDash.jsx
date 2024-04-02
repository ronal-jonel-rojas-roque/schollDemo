import React from "react";
import Cards from "../cartsdash/CartsDash";
import Table from "../table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Panel Administrativo</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;