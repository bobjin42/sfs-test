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
      });
  }, []);

  const handleAddDebt = () => {
    setAddingDebt(true);
  };

  const handleRemoveDebt = () => {
    let remainingTableData = tableData.filter((rowData) => !rowData.checked);
    setTableData(remainingTableData);
  };

  const handleDebtSave = (debtData) => {
    debtData.balance = !isNaN(Number(debtData.balance))
      ? Number(debtData.balance)
      : 0;
    debtData.minPaymentPercentage = isNaN(Number(debtData.minPaymentPercentage))
      ? debtData.minPaymentPercentage.slice(0, -1)
      : debtData.minPaymentPercentage;
    debtData.checked = false;
    setTableData([...tableData, debtData]);
    setAddingDebt(false);
  };

  const handleHeaderCheckbox = () => {
    tableData.forEach((rowData) => (rowData.checked = !headerCheckbox));
    setHeaderCheckbox(!headerCheckbox);
    setTableData(tableData);
  };

  const handleRowCheckbox = (id) => {
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
            <th className="checkbox-th">
              <input
                type="checkbox"
                checked={headerCheckbox}
                onChange={handleHeaderCheckbox}
              />
            </th>
            <th>Creditor</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th className="text-right">Min Pay%</th>
            <th className="text-right">Balance</th>
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
      <button onClick={handleRemoveDebt}>Remove Debt</button>
      <div className="total-checked-debt">
        <div>Total</div>
        <div>
          {`$${countCheckedBalance()
            .toFixed(2)
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} `}
        </div>
      </div>
      <div>
        <span className="total-row-count">{`Total Row Count: ${tableData.length}`}</span>
        <span>{`Check Row Count: ${countCheckedbox()} `}</span>
      </div>
    </>
  );
}
