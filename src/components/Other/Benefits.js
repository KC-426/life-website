import React from "react";

import data from "../../data/benefits/data.json";

export default function Benefits({ spaceBottom }) {
  return (
    <div
      className="benefits_main_data"
      style={{ marginBottom: spaceBottom || 100 / 16 + "rem" }}
    >
      <div className="container">
        <div className="row benefits___data">
          {data.map((b, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <div className="benefits__item">
                <div className="benefits__item__icon">
                  <img style={{
          filter: "hue-rotate(240deg)"
        }}
                  src={b.image} alt={b.name} />
                </div>
                <div className="benefits__item__content">
                  <h5>{b.name}</h5>
                  <p>{b.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
