import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Wishlist({ role }) {
  const { products, setProducts, username } = useContext(AppContext);

  return (
    <div>
      <h2>{username}'s wishlist</h2>
      <ul>
        {products &&
          products.map((product) => {
            return (
              <div
                className="card mb-3"
                style={{ maxWidth: "540px" }}
                key={product.id}
              >
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
                    {role === "creator" && (
                      <div className="mb-4">
                        <button className="btn btn-primary">Nudge</button>
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
