import React from 'react';
import logo from './logo.svg';
import coffeeTable from './coffee-table.jpg'
import './App.css';
import { SummaryCard } from './components/card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const renderCards = () => {
    return [coffeeTable, coffeeTable, logo, coffeeTable, coffeeTable, coffeeTable, coffeeTable].map((pic, index) => {
      return (
        <Col key={index} lg={4} md={6} style={{ marginBottom: '1rem', marginTop: '2rem'}}>
          <SummaryCard pic={pic} />
        </Col>
      )
    })
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        React Bootstrap
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          {renderCards()}
        </Row>
      </Container>
    </div>
  );
}

export default App;
