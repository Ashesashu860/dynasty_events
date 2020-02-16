import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import LandingPage from "./pages";
import Events from "./pages/events";
import Orders from "./pages/orders";
import products from "./pages/products";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/products" component={products} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/" component={LandingPage} />
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}

export default App;
