import React from "react";

export default function TableRow({
  rowData: { creditorName, firstName, lastName, minPaymentPercentage, balance },
}) {
  const formatedMinPayment = `${minPaymentPercentage.toFixed(2)}%`;
  const formatedBalance = balance.toFixed(2);

  return (
    <tr>
      <td>{creditorName}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{formatedMinPayment}</td>
      <td>{formatedBalance}</td>
    </tr>
  );
}
