import React, {useState, useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import { Link ,useHistory } from 'react-router-dom';
import { CardElement, useStripe,useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history= useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const[succeeded, setSucceeded] = useState(false);
    const[processing, setProcessing] = useState("");
    const [error, setError] =useState(null);
    const [disabled, setDisabled] =useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
      //genarate     
      const getClientSecret= async() => {
        const response = await axios({
            method: 'post',
            //stripe expect
            url:`/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.ClientSecret)

      }

      getClientSecret();

    }, [basket])

console.log('THE SECRET IS >>>', clientSecret)
console.log('BIRI',user)

    const handleSubmit = async (event) => {
        //do
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
           //payment = 

           db
           .collection('users')
           .doc(user?.uid)
           .collection('orders')
           .doc(paymentIntent.id)
           .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
           })

              
           setSucceeded(true);
           setError(null)
           setProcessing(false)

           dispatch({
            type:'EMPTY_BASKET'
           })

           history.replace('/orders')

        })


    }
    const handleChange = event => {
        //listen
        //dusply error
        setDisabled(event.empty);
        setError(event.error ? event.error.message :"");

    }

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
            Checkout (
                <Link to="/Checkout">{basket?.length} items</Link>
                )
            </h1>

        {/*delivary*/}
      <div className='payment__section'>
        <div className='payment__title'>
            <h3>Delivery Address</h3>

        </div>
        <div className='payment__address'>
            <p>{user?.email}</p>
            <p> 32/B ,Beach Road</p>
            <p> Matara, Sri Lanka</p>
        </div>
      </div>
     
     {/*Review*/}
     <div className='payment__section'>
        <div className='payment__title'>
           <h3>review</h3> 

        </div>
        <div className='payment__items'>
            {basket.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))}
        </div> 
      </div>


     {/*methode*/}
     <div className='payment__section'>
     <div className='payment__title'>
        <h3>Payment Methode</h3>
        </div>
        <div className='payment__details'>
            {/* strip */}
            <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>

                <div className='payment__priceContainer'>
                       <CurrencyFormat
                           renderText={(value) => (                   
                              <h3> Order Total: {value}</h3>             

                             )}
                         decimalScale={2}
                        value={getBasketTotal(basket)} // Part of the homework
                         displayType={"text"}
                         thousandSeparator={true}
                         prefix={"Rs "} 
                         />
                         <button disabled={processing || disabled||succeeded}>
                            <span>{processing ? <p> processing</p>: "BUY NOW"}
                            </span>

                         </button>
                </div>
                {/*error*/}
                {error && <div>{error}</div>}
            </form>

        </div>

        
      </div>

    </div>
    </div>
  )
}

export default Payment