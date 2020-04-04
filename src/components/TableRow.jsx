import React from "react";

export default function TableRow({
  rowData: {
    id,
    creditorName,
    firstName,
    lastName,
    minPaymentPercentage,
    balance,
    checked,
  },
  handleRowCheckbox,
}) {
  const formatedMinPayment = `${Number(minPaymentPercentage).toFixed(2)}%`;
  const formatedBalance = Number(balance).toFixed(2);

  return (
    <>
      <tr>
        <td>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => handleRowCheckbox(id)}
          />
        </td>
        <td>{creditorName}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{formatedMinPayment}</td>
        <td>{formatedBalance}</td>
      </tr>
    </>
  );
}
