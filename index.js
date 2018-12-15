import React, { Component } from "react";

import { Form, Button, Input, Message, Card, Table } from "semantic-ui-react";

import truffleContract from "truffle-contract";

class index extends Component {
  render() {
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Appointment Id</Table.HeaderCell>
            <Table.HeaderCell>Patiend Id </Table.HeaderCell>
            <Table.HeaderCell>Doctor Id</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Chep Complaint</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
    );
  }
}

export default index;
