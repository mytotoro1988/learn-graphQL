import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BookList = () => {
  return (
    <Row>
      <Col>
        <Card
          style={{ width: 200, height: 100 }}
          borrder="info"
          className="text-center m-3 shadow"
        >
          data
        </Card>
        <Card
          style={{ width: 200, height: 100 }}
          borrder="info"
          className="text-center m-3 shadow"
        >
          data
        </Card>

        <Card
          style={{ width: 200, height: 100 }}
          borrder="info"
          className="text-center m-3 shadow"
        >
          data
        </Card>
        <Card
          style={{ width: 200, height: 100 }}
          borrder="info"
          className="text-center m-3 shadow"
        >
          data
        </Card>
      </Col>
    </Row>
  );
};

export default BookList;
