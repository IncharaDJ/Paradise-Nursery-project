import React, { useState } from "react";
import ProductList from "./ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>
      {!showProductList ? (
        <div className="landing-page">
          <h1>Welcome to e-PlantShopping</h1>

          <p>
            Bring nature into your home with our beautiful collection of
            indoor and outdoor plants.
          </p>

          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
