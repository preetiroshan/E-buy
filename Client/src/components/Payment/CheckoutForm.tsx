import { Button } from 'react-bootstrap';
import StripeCheckout, { Token } from 'react-stripe-checkout';

type T = {
  price: number
  handlePaymentSuccess: (token: Token) => void
}
const CheckoutForm = ({ price, handlePaymentSuccess }: T) => {
  const priceForStripe = price * 100;
  const publishableKey: string = process.env.STRIPE_API_KEY || "";

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