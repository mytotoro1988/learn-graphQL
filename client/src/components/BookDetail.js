import React from "react";
import Card from "react-bootstrap/Card";

const BookDetail = () => {
  return (
    <div>
      <Card bg="info" text="white" className="shadow">
        <Card.Body>
          <Card.Title>Truyen</Card.Title>
          <Card.Subtitle>genre</Card.Subtitle>
          <div>
            <div>Vu trong phung</div>
            <div>50</div>
            <div>all books by this author: </div>
            <div className="m-3">
              <div>so do</div>
              <div>lang vu dai</div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookDetail;
