import React, { useState } from 'react';
import './App.css';

import CustomerOrderForm from './components/CustomerOrderForm.js';
import AdminOrderList from './components/AdminOrderList.js';


function App() {;
  const [orders, setOrders] = useState([]);

  const handleAddOrder = (order) => {
    setOrders([...orders, { ...order, status: 'Pending' }]);
  };

  const handleApproveOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = 'Approved';
    setOrders(updatedOrders);
  };

  return (
    <div className="App">
      <h1>Order Management App</h1>
      <CustomerOrderForm onAddOrder={handleAddOrder} />
      <AdminOrderList orders={orders} onApprove={handleApproveOrder} />
    </div>
  );
}

export default App;
