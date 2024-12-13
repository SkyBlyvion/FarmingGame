import React from "react";


const Grid = () => {
  const gridSize = 50; // Number of rows and columns
  const cells = [];

  // Generate grid cells
  for (let i = 0; i < gridSize * gridSize; i++) {
    cells.push(<div key={i} className="grid-cell"></div>);
  }

  return (
    <div
      className="grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        width: "100%",
        height: "100%",
      }}
    >
      {cells}
    </div>
  );
};

export default Grid;
