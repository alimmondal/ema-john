
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Header/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NoMatch from './components/NoMatch/NoMatch';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/Review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/Inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/Shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>


    </UserContext.Provider>
  );
}

export default App;
