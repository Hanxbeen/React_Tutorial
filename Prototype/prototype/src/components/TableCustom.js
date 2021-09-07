import React from "react";
import { Table } from "react-bootstrap";

function TableCustom({ columns, data }) {
  return (
    <Table striped bordered hover>
      {/* <Table striped bordered hover variant="dark">  */}
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ CompanyCode, RshName, Addr, Phone }) => (
          <tr key={CompanyCode + RshName + Addr + Phone}>
            <td>{CompanyCode}</td>
            <td>{RshName}</td>
            <td>{Addr}</td>
            <td>{Phone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default TableCustom;
