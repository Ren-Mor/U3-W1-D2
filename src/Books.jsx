import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

import fantasy from "./fantasy.json";
import history from "./history.json";
import romance from "./romance.json";
import horror from "./horror.json";
import scifi from "./scifi.json";

// Mappa categoria → dati
const bookData = {
  fantasy,
  history,
  romance,
  horror,
  scifi,
};

const Books = () => {
  const [category, setCategory] = useState("fantasy");
  const [books, setBooks] = useState(bookData["fantasy"]);

  useEffect(() => {
    setBooks(bookData[category] || []);
  }, [category]);

  return (
    <Container className="my-4">
      <div className="mb-3">
        <Button variant="primary" onClick={() => setCategory("fantasy")}>
          Fantasy
        </Button>
        <Button
          variant="secondary"
          onClick={() => setCategory("history")}
          className="ms-2"
        >
          History
        </Button>
        <Button
          variant="danger"
          onClick={() => setCategory("romance")}
          className="ms-2"
        >
          Romance
        </Button>
        <Button
          variant="dark"
          onClick={() => setCategory("horror")}
          className="ms-2"
        >
          Horror
        </Button>
        <Button
          variant="info"
          onClick={() => setCategory("scifi")}
          className="ms-2"
        >
          Sci-Fi
        </Button>
      </div>

      <Row>
        {books.map((book) => (
          <Col key={book.asin} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Books;
