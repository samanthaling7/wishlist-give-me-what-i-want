import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Wishlist({ role }) {
  const { products, setProducts } = useContext(AppContext);

  const onReservedClickHandler = (productId) => {
    const productReservedIndex = products.findIndex(
      (product) => product.id === productId
    );
    products[productReservedIndex].reserved =
      !products[productReservedIndex].reserved;
    setProducts([...products]);
  };

  return (
    <div>
      <ul className="m-0 p-0">
        {products &&
          products.map((product) => {
            return (
              <div
                className="d-flex border border-secondary rounded my-4 overflow-hidden bg-white boxShadow"
                key={product.title}
              >
                <div>
                  <img
                    src={product.thumbnail}
                    style={{
                      width: "175px",
                      height: "100%",
                      objectFit: "cover",
                      boxSizing: "border-box",
                    }}
                    className="d-block"
                    alt={product.title}
                  />
                </div>
                <div
                  className="text-left p-4 d-flex flex-column"
                  style={{ flexGrow: 1 }}
                >
                  <h2
                    className="card-title"
                    style={{ fontSize: "20px", fontWeight: 600 }}
                  >
                    {product.title}
                  </h2>
                  <p className="card-text" style={{ fontSize: "14px" }}>
                    by {product.partner}
                  </p>
                  <div className="d-flex justify-content-between mt-auto">
                    <div>£{product.price}</div>
                    {role === "subscriber" && (
                      <div className="col-xs-6">
                        <button
                          onClick={() => onReservedClickHandler(product.id)}
                          className={`btn ${
                            !product.reserved ? "btn-dark" : "btn-outline-dark"
                          }`}
                        >
                          {product.reserved ? "Reserve" : "Unreserve"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
