import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  const propsClass = props.className;

  return (
    <div className={`${classes.card} ${propsClass}`}>{props.children}</div>
  );
};

export default Card;
