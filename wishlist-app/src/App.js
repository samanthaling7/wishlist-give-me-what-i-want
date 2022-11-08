import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import CreatorView from "./pages/creator/CreatorView";
import SubscriberView from "./pages/subcriber/SubscriberView";

import { AppContext } from "./context/AppContext";

const initState = {
  username: "username12378",
  products: [],
};

const transformData = (products) => {
  return products.map((product) => ({
    ...product,
    reserved: false,
  }));
};

function App() {
  const [data, setData] = useState(initState);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((d) => {
        setData({
          ...data,
          products: transformData(d.products),
        });
      });
  }, []);

  return (
    <AppContext.Provider value={data}>
      <div className="App">
        <header className="App-header">
          <h1>My website</h1>
        </header>
        <Router>
          <div className="m-4">
            <Link to="/">Creator</Link>
          </div>
          <div className="m-4">
            <Link to="/subscriber">Subscriber</Link>
          </div>
          <Routes>
            <Route exact path="/" element={<CreatorView />} />
            <Route path="/subscriber" element={<SubscriberView />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
