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
    // checked: false,
  };
  const [debtInputValue, setDebtInputValue] = useState(debtFields);

  const handleInputChange = (e) => {
    setDebtInputValue({ ...debtInputValue, [e.target.name]: e.target.value });
  };

  return (
    <tr>
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
      <td>
        <button onClick={() => handleDebtSave(debtInputValue)}>Save</button>
      </td>
    </tr>
  );
}
