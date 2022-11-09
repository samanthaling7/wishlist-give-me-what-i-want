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

    console.log("newProducts", products);
  };

  return (
    <div>
      <ul className="m-0 p-0">
        {products &&
          products.map((product) => {
            console.log(product);
            return (
              <div className="card mb-3" key={product.id}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={product.thumbnail}
                      className="img-fluid rounded-start cover"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                    </div>
                    {role === "subscriber" && (
                      <div className="mb-4">
                        {!product.reserved && (
                          <button
                            onClick={() => onReservedClickHandler(product.id)}
                            className="btn btn-dark"
                          >
                            Reserve
                          </button>
                        )}
                        {product.reserved && (
                          <button
                            onClick={() => onReservedClickHandler(product.id)}
                            className="btn btn-outline-dark"
                          >
                            Unreserve
                          </button>
                        )}
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
