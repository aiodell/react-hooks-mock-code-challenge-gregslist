import React, { useState } from "react";

function ListingCard({image, description, location}) {

  const [favorite, setFavorite] = useState(false);
  function handleClick() {
    setFavorite(!favorite)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => console.log("deleted"))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active"  onClick = {handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite"  onClick = {handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick = {handleDelete}>🗑</button>
      </div>
    </li>
  );


}

export default ListingCard;
