import React from "react";
import Proptypes from "prop-types";

function TableHeader({ style, name, ...rest }) {
  return (
    <th style={style} {...rest}>
      {name}
    </th>
  );
}

TableHeader.propTypes = {
  style: Proptypes.object,
  name: Proptypes.string.isRequired,
};

export default TableHeader;
