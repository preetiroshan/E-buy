import React from 'react';
import { Button } from 'react-bootstrap';
import StripeCheckout, { Token } from 'react-stripe-checkout';

type T = {
  price: number
  handlePaymentSuccess: (token: Token) => void
}
const CheckoutForm = ({ price, handlePaymentSuccess }: T) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51K8mumSI82v7er65eie4zGjEaIJXCfSjnA00eJH24JadGKukM8Rx9D4grILNXubmK79HNAtLoa2c9gdxZl0zaIrf005yhVGrEu';

  // const onToken = (token: any) => {
  //   console.log(token);
  //   alert('Payment Succesful!');
  // };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Ebuy'
      billingAddress={false}
      shippingAddress={false}
      image='/assets/ebuy.png'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={handlePaymentSuccess}
      stripeKey={publishableKey}
      currency='INR'
      email={"ghg"}
    >
      <Button className="btn btn-warning">
        Pay
      </Button>
    </StripeCheckout>
  )
}

export default CheckoutForm;