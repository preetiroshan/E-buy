import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { TAddress } from '../../types';

type TOrderConfirmationProps = {
  address: TAddress
}
const OrderConfirmation = ({ address }: TOrderConfirmationProps) => {
  return (
    <div>
      Delivery address:
      <Card style={{ width: '18rem' }} className="shadow p-1 mb-2 bg-light rounded">
        <Card.Body>
          <Card.Title>{address.name}</Card.Title>
          <Card.Text>
            {address.addressLine1}
            <br />
            {address.addressLine2}
            Zip Code - {address.zipCode}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default OrderConfirmation
