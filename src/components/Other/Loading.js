import React from "react";

export default function Loading() {
  return (
    <div className="loading-overlay">
      <img
        src={process.env.PUBLIC_URL + "/assets/images/loadinggif.png"}
        alt="Loading image"
      />
    </div>
  );
}
