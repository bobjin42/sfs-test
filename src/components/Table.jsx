import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";
import DebtInput from "./DebtInput";

export default function Table() {
  //state
  const [tableData, setTableData] = useState([]);
  const [addingDebt, setAddingDebt] = useState(false);
  const [headerCheckbox, setHeaderCheckbox] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((rowData) => (rowData.checked = false));
        setTableData(data);
        console.log(data);
      });
  }, []);

  const handleAddDebt = () => {
    setAddingDebt(true);
  };

  const handleDebtSave = (debtData) => {
    setTableData([...tableData, debtData]);
    setAddingDebt(false);
  };

  const handleHeaderCheckbox = () => {
    tableData.forEach((rowData) => (rowData.checked = !headerCheckbox));
    setHeaderCheckbox(!headerCheckbox);
    setTableData(tableData);
  };

  const handleRowCheckbox = (id) => {
    console.log(id);
    let newTableData = tableData.map((row) => {
      if (row.id === id) row.checked = !row.checked;
      return row;
    });
    setTableData(newTableData);
  };

  const countCheckedbox = () => {
    return tableData.filter((row) => row.checked).length;
  };

  const countCheckedBalance = () => {
    let total = 0;
    tableData.forEach((row) => {
      if (row.checked) total += row.balance;
    });
    return total;
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={headerCheckbox}
                onChange={handleHeaderCheckbox}
              />
            </th>
            <th>Creditor</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Min Pay%</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData) => {
            return (
              <TableRow
                key={rowData.id}
                rowData={rowData}
                handleRowCheckbox={handleRowCheckbox}
              />
            );
          })}
          {addingDebt && <DebtInput handleDebtSave={handleDebtSave} />}
        </tbody>
      </table>
      <button onClick={handleAddDebt}>Add Debt</button>
      <button>Remove Debt</button>
      <div>
        <div>{`Total ${countCheckedBalance()} `}</div>
      </div>
      <div>
        <div>{`Total Row Count: ${tableData.length}`}</div>
        <div>{`Checked Row Count: ${countCheckedbox()} `}</div>
      </div>
    </>
  );
}
