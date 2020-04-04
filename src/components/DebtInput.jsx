import React, { useState } from "react";
import uuid from "react-uuid";

export default function DebtInput({ handleDebtSave }) {
  const debtFields = {
    id: uuid(),
    creditorName: "",
    firstName: "",
    lastName: "",
    minPaymentPercentage: "",
    balance: "",
  };
  const [debtInputValue, setDebtInputValue] = useState(debtFields);
  const [checkboxStatus, setCheckboxStatus] = useState(true);

  const handleInputChange = (e) => {
    setDebtInputValue({ ...debtInputValue, [e.target.name]: e.target.value });
  };

  const handleDebtSaveClick = () => {
    handleDebtSave(debtInputValue);
    setCheckboxStatus(false);
  };

  return (
    <tr>
      <td className="checkbox-td">
        <input type="checkbox" disabled={checkboxStatus} />
      </td>
      {Object.keys(debtFields)
        .slice(1)
        .map((debtField) => {
          return (
            <td key={debtField}>
              <input
                value={debtInputValue[debtField]}
                type="text"
                name={debtField}
                onChange={handleInputChange}
              />
            </td>
          );
        })}
      <td className="button-save-td">
        <button onClick={handleDebtSaveClick}>Save</button>
      </td>
    </tr>
  );
}
