import React from 'react';
import { PayPalButton } from '@paypal/react-paypal-js';

const PayPalPayment = ({ amount }) => (
  <PayPalButton amount={amount} onSuccess={(details, data) => {

  }} />
);

export default PayPalPayment;
