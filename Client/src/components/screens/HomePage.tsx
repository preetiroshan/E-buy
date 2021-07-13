import React, { useEffect, useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import { TBook } from '../../data';
import Book from '../Book';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../redux/store'
import { TBookState } from '../../redux/reducers/booksReducer';
import actions from '../../redux/actions';
import HomeCarousel from '../HomeCarousel';
import CardGroup from 'react-bootstrap/CardGroup';
import { Col } from 'react-bootstrap';


const HomePage = () => {
  const booksList = useSelector<StoreState, TBookState>((state) => state.products.books)
  const { isLoading, books, error } = booksList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getAllBooks())
    return () => {
      dispatch(actions.clearAllBooks())
    }
  }, [dispatch])

  console.log(booksList)
  return (
    <div>
      { isLoading && <b>Loading...</b>}
      {error && <b>Error occurred</b>}
      <HomeCarousel />
      <Container fluid className="justify-content-center">
        <Row>
          {books.map((product: TBook, key) => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <CardGroup>
                <Book key={key} book={product} />
              </CardGroup>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )

}
export default HomePage
