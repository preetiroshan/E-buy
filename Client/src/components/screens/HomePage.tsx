import React, { useEffect, useMemo, useState } from 'react';
import { Row, Container, Spinner } from 'react-bootstrap';
// import { TBook } from '../../types';
import Book from '../Book';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../redux/store'
import { TBookState } from '../../redux/reducers/booksReducer';
import actions from '../../redux/actions';
import HomeCarousel from '../HomeCarousel';
import Home2 from '../Home2';
import CardGroup from 'react-bootstrap/CardGroup';
import { Col } from 'react-bootstrap';
import BooksContainer from '../BooksContainer';


const HomePage = () => {
  const booksList = useSelector<StoreState, TBookState>((state) => state.products.books);
  const searchText = useSelector<StoreState, string>((state) => state.products.search.searchText);
  const { isLoading, books, error } = booksList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getAllBooks())
    return () => {
      dispatch(actions.clearAllBooks())
    }
  }, [dispatch])

  console.log(booksList)
  const filteredBooks = useMemo(() => books.filter((book) =>
    book.name.toLowerCase().includes(searchText.toLowerCase())
  ), [books, searchText])
  console.log(searchText);
  console.log(filteredBooks)
  return (
    <div>
      { isLoading && <Spinner animation="border" variant="dark" />}
      {error && <b>Error occurred</b>}
      {
        !searchText &&
        <>
          <HomeCarousel />
          <Home2 />
        </>
      }
      <BooksContainer books={filteredBooks
        || books} />
      {/* <Container fluid className="justify-content-center">
        <Row>
          {books.map((product: TBook, key) => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <CardGroup>
                <Book key={key} book={product} />
              </CardGroup>
            </Col>
          ))}
        </Row>
      </Container> */}
    </div>
  )

}
export default HomePage
