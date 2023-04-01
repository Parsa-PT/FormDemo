import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductHandlerProvider from './context/productHandler';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductHandlerProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductHandlerProvider> 
);

