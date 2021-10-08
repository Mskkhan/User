import React, { useEffect } from 'react';
import './App.css';
import Home from './container/HomePage';
import { BrowserRouter as Router,Route,Switch } from  'react-router-dom';
import ProductListPage from './container/ProductListPage';
import { useDispatch, useSelector } from "react-redux";
import { isUserLogedIn, updateCart} from "./action";
import ProductDetailsPage from "./container/ProductDetailsPage";
import CartPage from './container/CartPage';
import CheckoutPage from "./container/CheckoutPage";
import OrderPage from "./container/OrderPage";
import OrderDetailsPage from "./container/OrderDetailsPage";
function App() 
{
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLogedIn());
    }
  }, [auth.authenticate]);

  useEffect(() => {
    console.log("App.js - updateCart");
    dispatch(updateCart());
  }, [auth.authenticate]);

  return (
    <div className="App">
    
<Router>
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/cart" component={CartPage} />
    <Route path="/checkout" component={CheckoutPage} />
          <Route path="/account/orders" component={OrderPage} />
          <Route path="/order_details/:orderId" component={OrderDetailsPage} />
    <Route
            path="/:productSlug/:productId/p"
            component={ProductDetailsPage}
          />
    <Route path="/:slug"  component={ProductListPage}/>
   
  </Switch>
</Router>
    
    </div>
  );
}

export default App;
