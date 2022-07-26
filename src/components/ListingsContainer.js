import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((resp) => resp.json())
    .then((data) => setList(data));
  }, []);

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {list.map((lists) => {
          return(
            <ListingCard
            key= {lists.id}
            description = {lists.description}
            image = {lists.image}
            location = {lists.location}/>
          )
        })}

      </ul>
    </main>
  );
}

export default ListingsContainer;
