import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import CreatorView from "./pages/creator/CreatorView";
import MySubscribers from "./pages/creator/MySubscribers";
import SubscriberView from "./pages/subcriber/SubscriberView";

import { AppContext } from "./context/AppContext";
import productsData from "./data/products";

const transformData = (products) => {
  return products.map((product) => ({
    ...product,
    reserved: false,
  }));
};

function App() {
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("Bobby");
  const value = { products, setProducts, username };

  useEffect(() => {
    setProducts(transformData(productsData));
  }, []);

  return (
    <AppContext.Provider value={value}>
      <div className="App" style={{ maxWidth: "540px", margin: "auto" }}>
        <Router>
          <div className="m-2">
            <Link to="/"> Your account </Link>
            <span>|</span>
            <Link to="/subscriber"> Your subscriptions </Link>
          </div>
          <Routes>
            <Route exact path="/" element={<CreatorView />} />
            <Route
              exact
              path="/creator/subscribers"
              element={<MySubscribers />}
            />
            <Route path="/subscriber" element={<SubscriberView />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
