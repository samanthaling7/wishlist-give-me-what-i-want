import React, {useEffect, useState} from 'react';

import './App.css';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        {products.length > 0 && <img src={products[0].images[1]} className="" alt="" />}
      </header>
    </div>
  );
}

export default App;
