import React from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import { TBook } from '../../types';
import Book from './Book';

type BooksContainerProps = {
  books: TBook[];
}

const BooksContainer = ({ books }: BooksContainerProps) => {
  return (
    <Container fluid className="px-4 my-4 justify-content-center">
      <Row>
        <Col md={2}></Col>
        <Col md={8} lg={8}>
          <Row>
            {books.map((product: TBook, key: number) => (
              <Col xs={12} sm={6} md={6} lg={4} key={key}>
                <CardGroup>
                  <Book key={key} book={product} />
                </CardGroup>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container >
  )
}

export default BooksContainer;
