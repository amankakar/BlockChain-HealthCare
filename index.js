import React, { Component } from "react";
import ReceptionsitFactory from "../build/contracts/ReceptionsitFactory.json";
import Receptionist from "../build/contracts/Receptionsit.json";
import { Form, Button, Input, Message, Card , Table} from "semantic-ui-react";
import { Link } from "../routes";
//import getWeb3 from "../ethereum/getWeb3";
import web3 from "../ethereum/web3";
import truffleContract from "truffle-contract";
import Layout from "../components/Layout";
import instanceFactoryFile from "../ethereum/receptionFactory";
class index extends Component {



//import table 

  render(){
    return(

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
        <Table.Body>
          <Table.Row>
            <Table.Cell>{this.state.appointmentIdResult}</Table.Cell>
            <Table.Cell>{this.state.patientIdResult}</Table.Cell>
            <Table.Cell>{this.state.doctorIdresult}</Table.Cell>
            <Table.Cell>{this.state.dateResult}</Table.Cell>
            <Table.Cell>{this.state.chepComplaintResult}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

    );
  }
}

export default  index;
