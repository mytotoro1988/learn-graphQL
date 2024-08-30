import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookDetail from "./BookDetail";

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
      <Col>
        <BookDetail />
      </Col>
    </Row>
  );
};

export default BookList;
