import React from "react";
import data from "../../restaurants.db.json";

const BaltimoreCity = () => {
  return (
    <>
    <h1>Baltimore City Restaurants</h1>
      <div className="container text-center my-4">
        <div className="row">
          {data.baltimorecity.map((restaurant) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                <div className="card" style={{ minHeight: "200px" }}>
                  <a
                    className="card-body"
                    target="_blank"
                    href={restaurant.url}
                  >
                    <h3 className="card-title">{restaurant.name}</h3>
                    <p className="card-text">{restaurant.address}</p>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BaltimoreCity;
