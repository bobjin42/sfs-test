import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";

export default function Table() {
  //state
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
    )
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Creditor</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Min Pay%</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowData) => {
          return <TableRow rowData={rowData} key={rowData.id} />;
        })}
      </tbody>
    </table>
  );
}
