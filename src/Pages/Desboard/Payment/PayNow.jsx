import React from 'react';
import ShareTitle from './../../Shared/ShareTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Chackout from './Chackout';

const PayNow = () => {
    const stripePromise  = loadStripe('pk_test_51QgJiCLxAsBYxwlHxvwbUdoTCMy8nV5WKF8zeiME5hibiHHr4B2mZkRGmnyZ61E0TEbbYiwPu6z8YyKD9ypRKvTk00m6tEpCWt')
    return (
        <div>
            <ShareTitle title={'PAYMENT'} ></ShareTitle>

            <section>
               <div className='w-9/12 mx-auto'>
               <Elements stripe={stripePromise}>
                   <Chackout/>
               </Elements>
               </div>
            </section>
            
        </div>
    );
};

export default PayNow;