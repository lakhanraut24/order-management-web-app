import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function CustomerOrderForm({ onAddOrder }) {
  const [orderItem, setOrderItem] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [orderDate, setOrderDate] = useState('');
  const [orderTime, setOrderTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = { orderItem, quantity, orderDate, orderTime, status: 'Pending' };
    onAddOrder(order);
  };

  return (
    <FormContainer>
      <h2>Customer Order Form</h2>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="orderItem">Order Item:</Label>
        <Input type="text" id="orderItem" value={orderItem} onChange={(e) => setOrderItem(e.target.value)} required />

        <Label htmlFor="quantity">Quantity:</Label>
        <Input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />

        <Label htmlFor="orderDate">Order Date:</Label>
        <Input type="date" id="orderDate" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} required />

        <Label htmlFor="orderTime">Order Time:</Label>
        <Input type="time" id="orderTime" value={orderTime} onChange={(e) => setOrderTime(e.target.value)} required />

        <SubmitButton type="submit">Submit Order</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default CustomerOrderForm;
