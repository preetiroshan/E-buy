import React, { useState } from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';
import Rating from '@material-ui/core/Rating';
import { TBook } from '../../types';
import { Link } from 'react-router-dom'
import '../customStyle.css';
import Badge from 'react-bootstrap/Badge';
import './Book.css'

type TBookProps = {
  book: TBook;
}
const Book = ({ book }: TBookProps) => {
  const { url, author, _id, price, rating, numOfReview, name, originalPrice } = book;
  const discount = Math.round(((originalPrice - price) * 100) / originalPrice);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <Card
      className="book mt-4 text-center"

      // onMouseOver={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div>
        <Card.Img
          className="card-img-custom"
          loading="lazy"
          variant="top"
          alt={`${name.length}`}
          src={url}
        />
      </div>
      <Card.Body className="p-1">
        <Card.Title className="book-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <Link className="text-center book-title" onClick={() => window.scrollTo(0, 0)} to={
            {
              pathname: `/book/${name.replace(/\s/g, '')}`,
              state: {
                id: _id
              }
            }
          }>{name}</Link>
        </Card.Title>
      </Card.Body>
      <Card.Footer className="card-footer-custom">

        <Card.Subtitle className="mb-2 h4 text-muted" style={{ height: 'max-content' }}>{author}</Card.Subtitle>
        <b className="text-success mx-2">{price}</b>
        <b className={discount ? "original-price" : "none"}>&#8377;{originalPrice}</b>{` `}
        <Badge pill variant="warning">
          {price ? (originalPrice === price ? null : `Save ${discount}%`) : null}
        </Badge>
      </Card.Footer>
      {
        showDetails &&
        <>
          <Card.Footer>
            <Card.Text>
              <b className={discount ? "original-price" : "none"}>&#8377;{originalPrice}</b>{` `}
              <b className="text-success">{price}</b>
              <Badge pill variant="warning">
                {price ? (originalPrice === price ? null : `Save ${discount}%`) : null}
              </Badge>
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Row>
                <Col sm={12}>
                  <Rating name="read-only" value={rating} readOnly />
                </Col>
                <Col sm={12}>
                  {`${numOfReview} Reviews`}
                </Col>
              </Row>
            </div>


          </Card.Footer>
          <Card.Footer>
            <div className="d-flex justify-content-between my-1">
              <Link className="text-center" to={`/book/${name.replace(/\s/g, '')}`} onClick={() => {
                window.scrollTo(0, 0)
              }}>
                <Button size="sm">Add to Cart</Button>
              </Link>

            </div>
          </Card.Footer>
        </>
      }
    </Card >

  )
}

export default Book;
