import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
const Item = ({ info }) => {
  return (
    <Link to={`/detalle/${info.id}`} className="item">
      <img src={info.pictureUrl} alt="" />
      <p>
        {" "}
        {info.title} {info.pirce}{" "}
      </p>
      <p> {info.description}</p>
    </Link>
  );
};

export default Item;
