import { Button, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';
import { FcFeedback } from 'react-icons/fc';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <Jumbotron fluid className="bg-transparent jumbo">
        <Container>
          <Row>
            <Col md={6}></Col>
            <Col md={6}>

              <Container className="d-flex flex-column contact-container align-items-center">
                <h3 className="pt-4 d-flex jutify-content-center"><span>
                  We would love to hear from you! <FcFeedback /></span></h3>
                <Form className="contact-form">
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </Form>
              </Container>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div >
  )
}

export default Contact
