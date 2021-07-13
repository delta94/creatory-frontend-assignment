import React, { useState, useRef } from "react";
import { useEffect } from "react";
import Table from "../../components/Table";
import { PATH } from "../../constants/path";
import { useAuth } from "../../context";
import { useComponentVisible } from "../../hooks/useComponentVisible";
import { getStaffInfo } from "../../services/StaffService";
import { conf } from "./conf";
import "./styles.css";

function Staff() {
  const [data, setData] = useState([]);
  const { logout } = useAuth();
  const [pagination, setPagination] = useState({});
  const [isShowMenu, changeShowMenu] = useState(false);
  const ref = useRef(null);

  const list = [
    {
      label: "Log Out",
      value: "log_out",
      id: "log_out",
    },
  ];

  const getData = (params) => {
    getStaffInfo(params)
      .then((res) => {
        setData(res.data);
        setPagination(res.meta);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (value) => {
    switch (value) {
      case "log_out": {
        logout();
        break;
      }
      default:
        break;
    }
  };

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      changeShowMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header ref={ref}>
        <img
          onClick={() => changeShowMenu(true)}
          className="user-avatar"
          alt="Avatar"
          src="/img/avatar.png"
        />
        {isShowMenu ? (
          <div className="dropdown-items-wrapper">
            {list.map((item, index) => {
              let itemClass = "dropdown-items";
              if (item.customItemClass)
                itemClass = `${itemClass} ${item.customItemClass}`;
              return (
                <div
                  key={index}
                  className={itemClass}
                  onClick={() => handleChange(item.value)}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
        ) : null}
      </header>
      <div className="employee-wrapper">
        <div className="title-box">
          <h4 className="title">Employees List</h4>
        </div>
        <Table {...{ getData, data, conf, pagination }} />
      </div>
    </>
  );
}

export default Staff;
