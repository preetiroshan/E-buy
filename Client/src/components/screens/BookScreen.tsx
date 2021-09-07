import React, { useCallback, useEffect, useState } from 'react'
import { TBook } from '../../types';
import { Row, Col, Button, Form, Spinner, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Rating from '@material-ui/core/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../redux/store';
import { TBookDetailsState } from '../../redux/reducers/bookDetailsReducer';
import actions from '../../redux/actions';
import { TAddToCartFilter } from '../../types';
import { useHistory } from 'react-router';

const StyledContainer = styled(Container)`
  font-size: 1.8rem;
  & p {
    font-size: 1rem;
  };
  & select {
    font-size: 1rem
  }
`

const BookScreen = ({ match }: any) => {
  const bookName = match.params.name;
  const [quantity, setQuantity] = useState<number>(1)
  const booksDetails = useSelector<StoreState, TBookDetailsState>((state) => state.products.bookDetails)
  const { isLoading, book, error } = booksDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getBookDetails(bookName))
    return () => {
      dispatch(actions.clearAllBooks())
    }
  }, [dispatch, bookName]);
  const history = useHistory();

  const addToCart = useCallback((book, qty) => {

    history.push(`/cart?id=${book.id}&qty=${qty}`)

  }, [history])
  return (
    <>
      { isLoading && <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>}
      {error && <b>Error occurred</b>}
      {
        book &&
        <StyledContainer>
          <Row>
            <Col>
              <img className="p-4" src={book.url} alt={book.name} />
            </Col>
            <Col>
              <div>
                {book.name}
                <p className="m-1">{book.author}</p>
              &#8377;{book.price}
                <div className="d-flex flex-row align-items-center">
                  <Rating name="read-only" value={book.rating || 0} readOnly />
                  <h6>{`${book.numOfReview} Reviews`}</h6>
                </div>
                <p className="h6">{book.description}</p>
                {book.countAvailable > 0 ?
                  <h6 className="text-success">
                    In Stock
                </h6>
                  :
                  <h6 className="text-muted">
                    Out of Stock
                </h6>}

                {
                  (book.countAvailable > 0) &&
                  <>
                    <Button variant="warning" onClick={() => addToCart(book, quantity)}>Add to Cart</Button>
                    <Form.Group>
                      <Form.Label className="h6 mr-2">Select Quantity</Form.Label>
                      <select
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        aria-label="Default select example"
                      >
                        {Array.from({ length: book.countAvailable }).map((_, idx) => (
                          <option value={idx + 1} key={idx + 1}>{idx + 1}</option>
                        ))}
                      </select>
                    </Form.Group>
                  </>
                }
              </div>
            </Col>
            <Col></Col>
          </Row>

        </StyledContainer>
      }
    </>
  )
}

export default BookScreen;
