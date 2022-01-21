import React, { useCallback, useEffect, useState } from 'react'
import { Row, Col, Button, Form, Spinner, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Rating from '@material-ui/core/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../redux/store';
import { TBookDetailsState } from '../../../redux/reducers/bookDetailsReducer';
import actions from '../../../redux/actions/products/productActions';
import { useHistory } from 'react-router';
import BookCountSelector from '../../Book/BookCountSelector';
import CartIcon from '../../Header/CartIcon';
import "./BookScreen.css"

const StyledContainer = styled(Container)`
//  padding: 0 10rem;
  font-size: 1.8rem;
  & p {
    font-size: 1rem;
  };
  & select {
    font-size: 1rem
  }
`

const BookScreen = ({ match, location }: any) => {
  const [quantity, setQuantity] = useState<number>(1)
  const booksDetails = useSelector<StoreState, TBookDetailsState>((state) => state.products.bookDetails)
  const { isLoading, book, error } = booksDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.setSearchText(""))
    dispatch(actions.getBookDetails(location.state.id))
    return () => {
      dispatch(actions.clearAllBooks())
    }
  }, [dispatch, location]);
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
        book.id &&
        <StyledContainer>
          <Row>
            <Col md={6}>
              <img className="book" src={book.url} alt={book.name} />
            </Col>
            <Col md={6}>
              <div>
                {book.name}
                <p className="m-1">{book.author}</p>
              &#8377;{book.price}
                <br />
                <small className="text-muted"><del>
                  {book.originalPrice}
                </del>
                </small>
                <div className="d-flex flex-row align-items-center">
                  <Rating name="read-only" value={book.rating || 0} readOnly />
                  <h6>{`${book.numOfReview} Reviews`}</h6>
                </div>
                <p className="text-muted">{book.description}</p>
                {book.countAvailable > 0 ?
                  <h6 className="text-success">
                    In Stock
                </h6>
                  :
                  <h6 className="text-danger">
                    Out of Stock
                </h6>}

                {
                  (book.countAvailable > 0) &&
                  <>
                    <Button variant="warning" onClick={() => addToCart(book, quantity)}>
                      <Row className="add-cart-btn d-flex-md align-items-center justify-content-start">
                        <Col className="px-0" md={4} sm={5}>
                          <CartIcon />
                        </Col>
                        <Col className="px-0 text-align-start" md={8} sm={7}>
                          <b> Add to Cart</b>
                        </Col>
                      </Row>
                    </Button>
                    <Form.Group>
                      <BookCountSelector
                        id={book.id}
                        maxQuantity={book.countAvailable} handleChange={setQuantity} quantity={quantity} />
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
