import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const Chackout = () => {
    const [error,seterror] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)

        if(card === null){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            seterror(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            seterror(null)
          }
       
      

    }
    return (
        <form className='flex flex-col  ' onSubmit={handleSubmit}>
            <CardElement
            options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            >
                  </CardElement>
                <button className='btn btn-wide bg-orange-300 mt-5 ' type="submit" disabled={!stripe}>
        Pay 
      </button>
      <p className='text-red-500'>{error}</p>

          
        </form>
    );
};

export default Chackout;