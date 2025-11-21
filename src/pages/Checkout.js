import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51P6Eq3SBi7Kf1nHzdCsoB8RVyR7U0On7FemsdO8V7j9JrSXmOhYDLrokJH5AK5KdNYD95D0XxK9bYJnOSigb143e00TRmqWa7X');

    return (
        <section className="checkout-wrapper">
            <Authenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
            </Authenticator>
        </section>
    )
}

export default Checkout
