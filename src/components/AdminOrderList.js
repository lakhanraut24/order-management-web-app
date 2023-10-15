import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ListItem = styled.li`
  list-style: none;
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function AdminOrderList({ orders, onApprove }) {
  return (
    <ListContainer>
      <h2>Admin Order List</h2>
      <ul>
        {orders.map((order, index) => (
          <ListItem key={index}>
            <div>
              <strong>Order Item:</strong> {order.orderItem}
            </div>
            <div>
              <strong>Quantity:</strong> {order.quantity}
            </div>
            <div>
              <strong>Date:</strong> {order.orderDate}
            </div>
            <div>
              <strong>Time:</strong> {order.orderTime}
            </div>
            <div>
              <strong>Status:</strong> {order.status}
            </div>
            {order.status === 'Pending' && (
              <Button onClick={() => onApprove(index)}>Approve</Button>
            )}
          </ListItem>
        ))}
      </ul>
    </ListContainer>
  );
}

export default AdminOrderList;
