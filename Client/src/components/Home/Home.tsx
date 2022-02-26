import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div className="home" id="home">
      <Container className="py-4">
        <Row className="my-2">
          <Col md={6} className="d-flex justify-content-center mb-4 align-items-center">
            <div className="text-center">
              <h3>Stop Thinking, Start Reading!</h3>
              <p>
                Every Genre that you like
              </p>
              <Button variant="light"><a href="#bookContainer">Pick one</a></Button>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <img src="/assets/library.jpg" alt="bookstore" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;
