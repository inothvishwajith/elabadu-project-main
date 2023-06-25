import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const functions = require("firebase-functions");
const express =require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51MprXCAatMxPVGxfppsZlkdU5DWMP5p88SceMuJNDwkIEKngbkeqpcjd1brCcczcccKzGFcVSndTyTRP95PDcL5z00ao2vZon7')

// API
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

//app config
const app = express();

//Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

//API Routes
app.get("/",(request,response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request,response) => {
    const total = request.query.total;

console.log("Payment Request Reciever BOOM!! amout >>>", total);

    const paymentIntent= await stripe.paymentIntents.create({
        amount: total, // subunit of currency
        currency:"usd",

    });
    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

});

//Listen Command
exports.api = functions.https.onRequest(app)

//example
//http://localhost:5001/elabadunew/us-central1/api

