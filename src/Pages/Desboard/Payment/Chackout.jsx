import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxios from '../../../Hooks/useAxios';
import useCarts from '../../../Hooks/useCarts';
import useAuth from './../../../Hooks/useAuth';

const Chackout = () => {
    const [error,seterror] = useState('')

    const [clientSecret,setclientSecret]=useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosscure = useAxios();
    const [cart] = useCarts()
    const {user}=useAuth()
    const price = cart.reduce((total,item)=>total+item.price,0)
    useEffect(()=>{
    axiosscure.post('create-payment-intent',{price:price})
    .then(res=>{
        console.log(res.data.clientSecret)
        setclientSecret(res.data.clientSecret)
    })

    },[cart,price])
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
        //   confim pay
        const {paymentIntent,error:confimerror} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    name:user?.displayName || 'anonymous',
                    email:user?.email || 'anonymous',
                }
            }
        })
        if(confimerror){
            console.log('confim error:',confimerror)
        }
        else{
            console.log(paymentIntent)
            if(paymentIntent.status==='succeeded'){
                alert('payment succesful!')
            }
        }
       
      

    }
    return (
        <form className='flex flex-col  ' onSubmit={handleSubmit}>
            <h1 className='font-semibold text-center my-10'>Total Pay Amount: {price.toFixed(2)}</h1>
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
                <button className='btn btn-wide bg-orange-300 mt-5 ' type="submit" disabled={!stripe ||!clientSecret }>
        Pay 
      </button>
      <p className='text-red-500'>{error}</p>

          
        </form>
    );
};

export default Chackout;