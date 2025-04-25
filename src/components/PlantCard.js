import React from "react";

function PlantCard({ plant, onUpdatePlant }) {
  function handleSoldOutClick() {
    const updatedPlant = { ...plant, soldOut: !plant.soldOut };

    fetch("http://localhost:6001/plants/" + plant.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ soldOut: updatedPlant.soldOut })
    })
      .then((r) => r.json())
      .then((data) => {
        onUpdatePlant(data);
      });
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      {plant.soldOut ? (
        <button onClick={handleSoldOutClick}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleSoldOutClick}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
