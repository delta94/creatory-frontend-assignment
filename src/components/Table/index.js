import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Pagination from "../Pagination";
import "./styles.css";

const Table = ({ data = [], conf = [], getData, pagination = {} }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { totals = 0 } = pagination;
  let allPage = Math.floor(totals / 20);

  const renderTableHeader = () => {
    return (
      <>
        {conf.map((data) => {
          if (data.hidden) return null;
          return <TableHeader key={data.field} name={data.name} {...data} />;
        })}
      </>
    );
  };

  const renderTableRow = (item = {}) => {
    return (
      <>
        {conf.map((data) => {
          if (data.hidden) return null;
          return <TableRow key={data.field} data={item} conf={data} />;
        })}
      </>
    );
  };

  const renderTableData = () => {
    return data.map((item, index) => {
      return <tr key={item.id}>{renderTableRow(item)}</tr>;
    });
  };

  const resetPage = () => {
    const start = 0;

    getData({ offset: start });
  };

  const onChangeInputPage = (e) => {
    const text = e.target.value;
    if (/^[0-9]*$/.test(text)) {
      const num = Number(text);
      if (!num) setCurrentPage("");
      if (num > allPage) {
        resetPage();
        setCurrentPage(1);
      } else {
        const start = (num - 1) * 20;
        if (num <= 0) {
          getData({});

          return;
        }
        setCurrentPage(num);
        getData({ offset: start });
      }
    } else {
      setCurrentPage("");
      resetPage();
    }
  };

  useEffect(() => {
    getData({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="table-wrapper">
      <table id="staff">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>

      <div className="pagination-wrapper">
        <div className="pagination-input">
          <input
            className="input-pagination"
            value={currentPage}
            onChange={(e) => {
              onChangeInputPage(e);
            }}
          />
          <div className="upos-text">{` / ${allPage}`}</div>
        </div>

        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={totals}
          pageSize={20}
          onPageChange={(page) => {
            const start = 20 * (page - 1);

            getData({ offset: start });
            setCurrentPage(page);
          }}
        />
      </div>
    </div>
  );
};

export default React.memo(Table);
