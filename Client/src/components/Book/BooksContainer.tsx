import React from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import { TBook } from '../../types';
import Book from './Book';

type BooksContainerProps = {
  books: TBook[];
}

const BooksContainer = ({ books }: BooksContainerProps) => {
  return (
    <Container fluid className="px-4 my-4 justify-content-center" id="bookContainer">
      <Row>
        <Col md={1}></Col>
        <Col md={10} lg={10}>
          <Row>
            {books.map((product: TBook, key: number) => (
              <Col xs={6} sm={6} md={6} lg={3} key={key}>
                <CardGroup>
                  <Book key={key} book={product} />
                </CardGroup>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container >
  )
}

export default BooksContainer;
