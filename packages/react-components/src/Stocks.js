import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ownStyles from './Stocks.module.scss';

const Stocks = ({ stocks }) => (
  <Container className={ownStyles.container}>
    <Row className={ownStyles.rowHeader}>
      <Col>Name</Col>
      <Col>PER</Col>
      <Col>ROCE</Col>
    </Row>
    {stocks.map((stock) => (
      <Row key={`row-${stock.name}`}>
        <Col>{stock.name}</Col>
        <Col>{stock.per}</Col>
        <Col>{`${stock.roce}%`}</Col>
      </Row>
    ))}
  </Container>
);
export default Stocks;
