import React from "react";
import "./Shimmer.css"; // we’ll add CSS below

function Shimmer({ count = 6 }) {
  return (
    <div className="row">
      {Array.from({ length: count }).map((_, index) => (
        <div className="col-md-4 mb-3" key={index}>
          <div className="card shimmer-card">
            <div className="shimmer-img"></div>
            <div className="card-body">
              <div className="shimmer-line w-75"></div>
              <div className="shimmer-line w-50 mt-2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shimmer;
