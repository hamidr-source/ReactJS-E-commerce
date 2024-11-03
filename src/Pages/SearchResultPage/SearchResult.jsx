import React from "react";
import { useLocation } from "react-router-dom";

const SearchResult = () => {
    const location = useLocation()
    console.log(location.state)

  return <div></div>;
};

export default SearchResult;
