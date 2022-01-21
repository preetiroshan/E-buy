import React from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap';
import { Formik } from "formik";
import * as yup from "yup";
import { TAddress } from '../../types';

type TAddressFormProps = {
  initialAddress: TAddress;
  setAddress: (val: TAddress) => void;
  setCurrentState: (val: number) => void;
  currentState: number;
  handleClose: () => void;
}

const AddressForm = ({ initialAddress, setAddress, setCurrentState, currentState, handleClose }: TAddressFormProps) => {
  const initialValues: TAddress = {
    name: "",
    addressLine1: "",
    addressLine2: "",
    zipCode: ""
  }

  return (
    <Container>
      <Formik
        enableReinitialize
        // validationSchema={schema}
        initialValues={initialAddress}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setAddress(values);
          setCurrentState(1)
          resetForm();
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          handleReset,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Col className="p-0">
              {console.log(errors)}
              <Form.Group as={Col} controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={touched.name && !!errors.name}
                // error={errors.name}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="addressLine1">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address Line 1"
                  name="addressLine1"
                  value={values.addressLine1}
                  onChange={handleChange}
                  isInvalid={touched.addressLine1 && !!errors.addressLine1}
                // error={errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.addressLine1}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="addressLine2">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address Line 2"
                  name="addressLine2"
                  value={values.addressLine2}
                  onChange={handleChange}
                  isInvalid={touched.addressLine2 && !!errors.addressLine2}
                // error={errors.email}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="zipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="tel"
                  maxLength={6}
                  minLength={6}
                  placeholder="Enter 6 digit zipcode Zipcode"
                  name="zipCode"
                  value={values.zipCode}
                  onChange={handleChange}
                  isInvalid={touched.zipCode && !!errors.zipCode}
                />
              </Form.Group>
              <div className="d-flex flex-row justify-content-center">
                <Button type="submit" className="m-2 btn btn-warning" disabled={!(values.name && values.addressLine1 && values.zipCode)}>
                  Next
                </Button>
                <Button variant="secondary" className="m-2 btn btn-dark" onClick={handleClose}>
                  {
                    (currentState) ? "Back" : "Cancel"
                  }
                </Button>
              </div>
            </Col>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default AddressForm
