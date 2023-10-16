import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { Auth0Provider } from '@auth0/auth0-react';

const domain=process.env.REACT_APP_AUTH0_DOMAIN;
const clientID=process.env.REACT_APP_AUTH0_CLIENT_ID;
export const publishableKey=process.env.REACT_APP_PAYMENT_KEY;
export const PricingKey=process.env.REACT_APP_PAYMENT_PRICING_TABLE_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <Auth0Provider
    domain={domain}
    clientId={clientID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <Router>
    <App />
    </Router>
  </Auth0Provider>,
   
  </React.StrictMode>
);

 