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
      <ul style={{ padding: "0" }}>
        {products &&
          products.map((product) => {
            console.log(product);
            return (
              <div>
                <div
                  class="card flex-row"
                  key={product.id}
                  style={{
                    marginBottom: "50px",
                    textAlign: "left",
                    opacity: product.reserved ? "0.5" : "1",
                  }}
                >
                  <img
                    src={product.thumbnail}
                    className="img-fluid rounded-start cover"
                    alt=""
                    width=""
                  />
                  <div class="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <div />
                    <div
                      class="card-footer"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        paddingLeft: "20px",
                        marginTop: "100px",
                      }}
                    >
                      <div class="row">
                        <div
                          class="col-xs-6"
                          style={{
                            marginRight: "auto",
                          }}
                        >
                          £{product.price}
                        </div>
                        {role === "subscriber" && (
                          <div class="col-xs-6">
                            {!product.reserved && (
                              <button
                                onClick={() =>
                                  onReservedClickHandler(product.id)
                                }
                                className="btn btn-dark"
                              >
                                Reserve
                              </button>
                            )}
                            {product.reserved && (
                              <button
                                onClick={() =>
                                  onReservedClickHandler(product.id)
                                }
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
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
