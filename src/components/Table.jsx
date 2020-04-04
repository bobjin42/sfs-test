import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";
import DebtInput from "./DebtInput";

export default function Table() {
  //state
  const [tableData, setTableData] = useState([]);
  const [addingDebt, setAddingDebt] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
    )
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);

  const handleAddDebt = () => {
    setAddingDebt(true);
  };

  const handleDebtSave = (debtData) => {
    setTableData([...tableData, debtData]);
    setAddingDebt(false);
  };

  return (
    <>
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
          {addingDebt && <DebtInput handleDebtSave={handleDebtSave} />}
        </tbody>
      </table>
      <button onClick={handleAddDebt}>Add Debt</button>
      <button>Remove Debt</button>
    </>
  );
}
