import React from "react";

export default function TableRow({
  rowData: { creditorName, firstName, lastName, minPaymentPercentage, balance },
}) {
  minPaymentPercentage = isNaN(Number(minPaymentPercentage))
    ? minPaymentPercentage.slice(0, -1)
    : minPaymentPercentage;
  const formatedMinPayment = `${Number(minPaymentPercentage).toFixed(2)}%`;
  const formatedBalance = Number(balance).toFixed(2);

  return (
    <>
      <tr>
        <td>{creditorName}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{formatedMinPayment}</td>
        <td>{formatedBalance}</td>
      </tr>
    </>
  );
}
