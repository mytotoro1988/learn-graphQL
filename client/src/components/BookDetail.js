import React from "react";
import Card from "react-bootstrap/Card";

const BookDetail = () => {
  return (
    <div>
      <Card bg="info" text="white" className="shadow">
        <Card.Body>
          <Card.TiSubtitletle>van</Card.TiSubtitletle>
          <Card.Title>genre</Card.Title>
          <Card.Text>Content</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookDetail;
