import React, { useState, useEffect } from 'react';

export default function API_ELEMENTS() {


  const [poke, setPoke] = useState()

  useEffect(() => {
   function fetchData() {
     fetch("https://pokeapi.co/api/v2/pokemon/venusaur")
      .then((response) => response.json())
      .then((data) => {
        //use data here
        console.log(data)
          setPoke(data)
        
      })
      .catch((error) => console.error(error));
  }
  fetchData()
  }, [])

  return (
    <div>
      {poke?.sprites ? <img src={poke?.sprites?.other["official-artwork"].front_default} alt="animal" /> : <p>Loading</p>}
    </div>
  )
}
