import React from "react";

export default function TableRow({
  rowData: { creditorName, firstName, lastName, minPaymentPercentage, balance },
}) {
  return (
    <tr>
      <td>{creditorName}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{minPaymentPercentage}</td>
      <td>{balance}</td>
    </tr>
  );
}
