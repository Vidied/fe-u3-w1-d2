import { useState } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  const [ricerca, impostaRicerca] = useState("");

  return (
    <Container>
      {" "}
      <Row className="justify-content-center my-3">
        <Col md={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Cerca un libro..."
              value={ricerca}
              onChange={(e) => impostaRicerca(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {books
          .filter((libro) =>
            libro.title.toLowerCase().includes(ricerca.toLowerCase()),
          )
          .map((libro) => (
            <Col xs={12} md={4} lg={3} key={libro.asin}>
              <SingleBook book={libro} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
