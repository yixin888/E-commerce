import React , { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from  "./Login";
import Payment from './Payment';
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51InwVtEJJOfbs8YUaNr87BPbflbHCfahSM6lhOxO8HirbVGXLPjCEcbtOP2dlz3HLyvZh9MUKUayVczvY5SYEdA6007hsOqmDf');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in 用户已经登入
        dispatch ({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user was logged out 用户已经登出
        dispatch({
          type:'SET_USER',
          user: null,
        });
      }

    });
  }, []);
  
  
  return (
    //BEM
    <Router>
     <div className="app">
      <Switch>
       <Route path="/orders">
          <Header />
           <Orders  />
        </Route>
       <Route path="/login">
           <Login  />
        </Route>
         
         <Route path="/checkout">
          <Header />
           <Checkout />
        </Route>

        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
             <Payment />
          </Elements>
        </Route>

        
         <Route path="/">  
         <Header />
         <h1>Welcome to Lightness Store</h1>
         <Home />
          </Route>
       </Switch>
       </div>
    </Router>
  );
}

export default App;
