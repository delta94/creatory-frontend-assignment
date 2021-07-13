import React from "react";
import moment from "moment";
import Proptypes from "prop-types";
import Badge from "../Badge";

function TableRow({ conf, data }) {
  switch (conf.type) {
    case "badge":
      return (
        <td>
          <Badge isActive={data[conf.field]} />
        </td>
      );
    case "date":
      return (
        <td>
          <span>{moment(data[conf.field]).format("DD/MM/YYYY HH:mm:ss")}</span>
        </td>
      );
    default:
      return <td>{data[conf.field]}</td>;
  }
}

TableRow.defaultProps = {
  conf: {},
  data: {},
};

TableRow.propTypes = {
  conf: Proptypes.object.isRequired,
  data: Proptypes.object.isRequired,
};

export default TableRow;
