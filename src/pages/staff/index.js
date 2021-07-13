import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Table from "../../components/Table";
import { getStaffInfo } from "../../services/StaffService";
import { conf } from "./conf";
import "./styles.css";

function Staff() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getData = (params) => {
    getStaffInfo(params)
      .then((res) => {
        console.log(res);
        setData(res.data);
        setPagination(res.meta);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="employee-wrapper">
      <div class="title-box">
        <h4 class="title">Employees List</h4>
      </div>
      <Table {...{ getData, data, conf, pagination }} />
    </div>
  );
}

export default Staff;
