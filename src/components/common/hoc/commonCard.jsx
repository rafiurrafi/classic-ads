import React from "react";

const CommonCard = ({ children, cardType }) => {
  return <div class={`common-card ${cardType}`}>{children}</div>;
};

export default CommonCard;
