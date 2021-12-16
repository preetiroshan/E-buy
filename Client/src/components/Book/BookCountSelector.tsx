import React, { useState, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { idText } from 'typescript';
import actions from '../../redux/actions/products/productActions';
import './BookCountSelector.css'

type TBookCountSelector = {
  id: number;
  quantity: number;
  handleChange: (val: number) => void;
  maxQuantity: number;
  handleRemove?: () => void;
}

const StyledCountIcon = styled.img`
  width: 3rem;
  height: 1rem;
  background: cover
`
const BookCountSelector = ({ id, quantity, handleChange, maxQuantity, handleRemove }: TBookCountSelector) => {
  const [count, setCount] = useState(quantity);
  const dispatch = useDispatch();
  const handleAdd = useCallback(() => {
    if (count < maxQuantity) {
      handleChange(count + 1)
      setCount((count) => count + 1)
    }
  }, [count, handleChange, maxQuantity])

  const handleMinus = useCallback(() => {
    if (count > 1) {
      handleChange(count - 1)
      setCount((count) => count - 1)
    }
    else dispatch(actions.removeFromCart(id))
  }, [count, handleChange, dispatch, id])
  return (
    <div className="count">
      <Button variant="light" >
        <StyledCountIcon src="/assets/minus.svg" alt="minus-icon" className="count-img" onClick={handleMinus} />

      </Button>
      <Button variant="light">
        {quantity}
      </Button>
      <Button variant="light">
        <StyledCountIcon src="/assets/plus.svg" alt="plus-icon" className="count-img" onClick={handleAdd} />
      </Button>
    </div>
  )
}

export default BookCountSelector
