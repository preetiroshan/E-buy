import React, { useState } from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';
import { FcLike } from 'react-icons/fc';
import Rating from '@material-ui/core/Rating';
import { TBook } from '../types';
import { Link } from 'react-router-dom'
import './customStyle.css';
import Badge from 'react-bootstrap/Badge';

type TBookProps = {
  book: TBook;
}
const Book = ({ book }: TBookProps) => {
  const { url, author, _id, price, rating, numOfReview, name, originalPrice } = book;
  const discount = Math.round(((originalPrice - price) * 100) / originalPrice);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <Card
      className="book m-4 text-center"

      onMouseOver={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div>
        <Card.Img
          variant="top"
          alt={`${name.length}`}
          src={url}
          style={{ height: '15rem' }}
        />
      </div>
      <Card.Body>
        <Card.Title style={{ height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <Link className="text-center" to={
            {
              pathname: `/book/${name.replace(/\s/g, '')}`,
              state: {
                id: _id
              }
            }
          }>{name}</Link>
        </Card.Title>
      </Card.Body>
      <Card.Footer>

        <Card.Subtitle className="mb-2 text-muted" style={{ height: 'max-content' }}>{author}</Card.Subtitle>
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
            <div className="d-flex justify-content-between m-1">
              <Card.Link href="#"><FcLike size={20} /></Card.Link>
              <Link className="text-center" to={`/book/${name.replace(/\s/g, '')}`}><Button size="sm">Buy Now</Button>
              </Link>

            </div>
          </Card.Footer>
        </>
      }
    </Card>

  )
}

export default Book;
