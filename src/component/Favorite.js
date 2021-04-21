import React from "react";

import { useState, useEffect } from "react";
import { Favoriteheader } from "../stories/Favoriteheader";
import { Favoritepage } from "../stories/Favoritepage";

function Favorite() {
  const [fave, setFave] = useState([]);

  return (
    <div className="Favelist">
      <Favoriteheader />
    </div>
  );
}

export default Favorite;
