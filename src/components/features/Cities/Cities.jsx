import React from "react";

export default function Cities() {
  const [cities] = React.useState("");
  return (
    <div>
      <h2>Cities Page</h2>
      <div className="results">{cities}</div>
    </div>
  );
}
