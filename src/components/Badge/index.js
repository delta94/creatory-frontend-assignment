import React from "react";
import Proptypes from "prop-types";

import "./styles.css";

function Badge({ isActive }) {
  return (
    <span className={isActive ? `bagde badge-active` : `bagde badge-inactive`}>
      {isActive ? "Active" : "Inactive"}
    </span>
  );
}

Badge.propTypes = {
  isActive: Proptypes.bool.isRequired,
};

export default Badge;
