
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import Register from "./Register";
import{ auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ListUserComponents from "./components/ListUserComponents";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponents from "./components/FooterComponents";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import FooterComponent1 from "./components2/FooterComponent1";
import AddProductComponent from "./components2/AddProductComponent";
import HeaderComponent1 from "./components2/HeaderComponent1";
import ListProductComponent1 from "./components2/ListProductComponent1";


const promise = loadStripe
('pk_test_51MprXCAatMxPVGxfJBW8jUqfXbRjBtXZIi4EmVXRI2KN41uEb5JXT73T8oFX7AHSjFNZH7ZgOn5D4hdvoULOlT1H00HztySoBq');

function App() {
  const [{}, dispatch] =useStateValue();
 useEffect(( )=>  { // wil only..

  auth.onAuthStateChanged(authUser => {
    console.log('THE USER IS >>>', authUser);

    if(authUser) { 
      //the user

      dispatch({
        type: 'SET_USER',
        user: authUser

      })
    }
    else{
      //logout

      dispatch({
        type: 'SET_USER',
        user: null
    })
  }
}) 

},[] )

return (
  //BEM
  <Router>
  <div className="app">
    <Switch>
    <Route path="/edit-product/:id">
    <Header />
       <HeaderComponent1/>
       <AddProductComponent/>
       <FooterComponent1/>
     </Route>

    <Route path="/add-Product">
    <Header />
       <HeaderComponent1/>
       <AddProductComponent/>
       <FooterComponent1/>
     </Route>

    <Route path="/products">
       <Header />
       <HeaderComponent1/>
       <ListProductComponent1/>
       <FooterComponent1/>
     </Route>
    <Route path="/edit-user/:id">
       <Header />
       <HeaderComponent/>
       <AddEmployeeComponent/>
       <FooterComponents/>
     </Route>
    <Route path="/add-user">
       <Header />
       <HeaderComponent/>
       <AddEmployeeComponent/>
       <FooterComponents/>
     </Route>

    <Route path="/users">
       <Header />
       <HeaderComponent/>
       <ListUserComponents/>
       <FooterComponents/>
     </Route>
    <Route path="/orders">
       <Header />
       <Orders />
     </Route>

     <Route path="/login">
       <Login />
     </Route>

     <Route path="/checkout">
       <Header />
       <Checkout />
     </Route>

     <Route path="/register">
       <Register />
     </Route>

     <Route path="/payment">
       <Header />
       <Elements stripe={promise}>
       <Payment />
       </Elements>   
     </Route>

     <Route path="/">
       <Header />
       <Home />
     </Route>
     
     
    </Switch>
    
  </div>
  </Router>
);
}
export default App;