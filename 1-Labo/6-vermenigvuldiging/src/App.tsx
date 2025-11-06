import React from "react";

const MultiplicationTable = () => {
  const columns = Array.from({ length: 10 }, (_, i) => i + 1);
  const rows = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <>
      <table>
        <thead>
            {
              columns.map(column => <th key={column}>{column}</th>)
            }
        </thead>
        <tbody>
            {
              rows.map(row => <tr>
                <th>
                  {row}
                </th>
                {columns.map(col => <td>{row * col}</td>)}
              </tr>)
            }
        </tbody>
      </table>
    </>
  );
};

export default MultiplicationTable;
