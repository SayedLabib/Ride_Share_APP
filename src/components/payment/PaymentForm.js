import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { colors } from '../../theme/colors';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ amount, onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);
  const [cardElement, setCardElement] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const stripe = await stripePromise;
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        onError(error.message);
      } else {
        onSuccess(paymentMethod.id);
      }
    } catch (err) {
      onError('An error occurred while processing your payment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Payment Details</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-600 mb-2">
              Card Information
            </label>
            <div
              id="card-element"
              className="p-3 border border-neutral-300 rounded-lg focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              ref={(element) => setCardElement(element)}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-neutral-800">Total Amount</span>
            <span className="text-xl font-bold text-primary-600">${amount.toFixed(2)}</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-4 rounded-lg text-white font-medium ${
            loading ? 'bg-neutral-400' : 'bg-primary-500 hover:bg-primary-600'
          } transition-colors`}
        >
          {loading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-6 h-6 border-4 border-white border-t-transparent rounded-full mx-auto"
            />
          ) : (
            'Pay Now'
          )}
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-neutral-600">
          Your payment is secure and encrypted
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <img
            src="/images/visa.svg"
            alt="Visa"
            className="h-6"
          />
          <img
            src="/images/mastercard.svg"
            alt="Mastercard"
            className="h-6"
          />
          <img
            src="/images/amex.svg"
            alt="American Express"
            className="h-6"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentForm; 