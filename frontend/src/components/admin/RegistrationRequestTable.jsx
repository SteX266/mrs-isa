import React from "react";
import { Table, Button } from "react-bootstrap";

export default function RegistrationRequestTable(props) {
  let headers = ["Email", "Type", "Description", "Accept", "Decline"];
  return (
    <Table striped hover className="rounded">
      <TableHeader headers={headers}></TableHeader>
      <TableBody
        onAccept={props.onAccept}
        onDecline={props.onDecline}
        requests={props.requests}
      ></TableBody>
    </Table>
  );
}

function TableHeader(props) {
  return (
    <thead>
      <tr>
        {props.headers.map((header, index) => (
          <th style={{ textAlign: "center" }} key={index}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function TableBody(props) {
  console.log("telo");
  console.log(props.requests);
  return (
    <tbody>
      {props.requests.map((request) => (
        <EditableTableRow
          onAccept={props.onAccept}
          onDecline={props.onDecline}
          key={request.id}
          request={request}
        ></EditableTableRow>
      ))}
    </tbody>
  );
}

function EditableTableRow(props) {
  let names = Object.getOwnPropertyNames(props.request);

  return (
    <tr id={props.request.id}>
      {names.map((n, index) => {
        if (n !== "id") {
          let text = props.request[n];
          return (
            <td style={{ "text-align": "center" }} key={index}>
              {text}
            </td>
          );
        }
      })}
      <td>
        <Button
          onClick={() => props.onAccept(props.request.id)}
          variant="outline-primary"
        >
          Accept
        </Button>
      </td>
      <td>
        <Button
          id={props.request.id}
          onClick={() => props.onDecline(props.request.id)}
          variant="outline-primary"
        >
          Decline
        </Button>
      </td>
    </tr>
  );
}
