import React, { Component } from 'react';
import './App.css';
import {
  Container,
  Row,
  Col,
  Input
} from 'reactstrap';
import { convertToRoman } from './logic.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      number: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
      this.setState({
        number: e.target.value
      });
  }

  render() {
    return (
      <div className="App">
        <Container style={{marginTop: 200}}>
          <Row>
            <Col xs="3"></Col>
            <Col xs="6">
              <Input onChange={this.onChange} style={{height: 70, fontSize: "2em", textAlign: "center"}} placeholder="Enter number to be converted."></Input>
            </Col>
            <Col xs="3"></Col>
          </Row>
          <Row style={{height: 40}}>
          </Row>
          <Row>
          <Col xs="3"></Col>
            <Col xs="6">
              <h1>{this.state.number.toString().length <= 4 ? convertToRoman(this.state.number) : "Number too high!"}</h1>
            </Col>
            <Col xs="3"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
