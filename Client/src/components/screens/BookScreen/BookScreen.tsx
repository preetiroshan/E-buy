import { useCallback, useEffect, useState } from 'react'
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
  & p{
    color: var(--grey)
  }

`

const BookScreen = ({ location }: any) => {
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
      {isLoading && <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>}
      {error && <b>Error occurred</b>}
      {
        book.id &&
        <StyledContainer className="p-4 d-flex align-items-center book-screen-container">
          <Row className='mt-4'>
            <Col sm={4} xs={4} className="mt-4">
              <img className="book" src={book.url} alt={book.name} />
            </Col>
            <Col sm={8} xs={8} className="mt-4">
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
                  <p className="my-0 mx-2">{`${book.numOfReview} Reviews`}</p>
                </div>
                <p className="book-description text-muted">{book.description}</p>
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
          </Row>

        </StyledContainer>
      }
    </>
  )
}

export default BookScreen;
