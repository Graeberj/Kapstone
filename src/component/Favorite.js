import React from "react";

import { useState, useEffect } from "react";
import { Favoriteheader } from "../stories/Favoriteheader";
import { Favoritepage } from "../stories/Favoritepage";
import BreadcrumbsHeader from "../stories/BreadcrumbsHeader";

function Favorite() {
  const [fave, setFave] = useState([]);

  return (
    <div className="sb-show-main">
      
      <BreadcrumbsHeader />
      <Favoriteheader />
    </div>
  );
}

export default Favorite;
