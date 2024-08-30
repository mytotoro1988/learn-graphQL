import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const FormsAdd = () => {
  return (
    <Row>
      <Col>
        <Form>
          <Form.Group className="m-2">
            <Form.Control type="text" placeholder="Book name" />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Control type="text" placeholder="Genre" />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Control as="select" defaultValue="Select author">
              <option>Select author</option>
            </Form.Control>
          </Form.Group>
          <Button className="float-right m-2" variant="info" type="submit">
            Add Book
          </Button>
        </Form>
      </Col>

      <Col>
        <Form>
          <Form.Group className="invisible">
            <Form.Control />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Control type="text" placeholder="Author name" />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Control type="number" placeholder="Author Age" />
          </Form.Group>

          <Button className="float-right m-2" variant="info" type="submit">
            Add Author
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default FormsAdd;
