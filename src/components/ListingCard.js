import React, { useState } from "react";

function ListingCard({image, description, location, handleDelete}) {

  const [favorite, setFavorite] = useState(false);
  function handleClick() {
    setFavorite(!favorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details" onClick = {handleClick}>
        {favorite ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite" >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick = {handleDelete}>🗑</button>
      </div>
    </li>
  );


}

export default ListingCard;
