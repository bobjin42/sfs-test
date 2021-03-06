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
      <tr className="table-row">
        <td className="checkbox-td">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => handleRowCheckbox(id)}
          />
        </td>
        <td>{creditorName}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td className="text-right">{formatedMinPayment}</td>
        <td className="text-right">{formatedBalance}</td>
      </tr>
    </>
  );
}
