import React, { useEffect, useState } from "react";
import Search from "./search";
import Recipelist from "./recipelist";
import getrecipes from "./api";

function Recipes() {
  const [loading, setLoading] = useState(true);
  const [searchedQuery, setsearchedQuery] = useState("pizza");
  const [recipes, setrecipes] = useState([]);

  const getsearched = async () => {
    try {
      const result = await getrecipes(searchedQuery);
      if (result && result.recipes) {
        setrecipes(result.recipes);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getsearched();
  }, [searchedQuery]); 
  return (
    <>
      <Search setsearchedQuery={setsearchedQuery} />
      {loading ? (
        <h1 className="load">Loading.....</h1>
      ) : (
        <Recipelist recipes={recipes} searchedQuery={searchedQuery} />
      )}
    </>
  );
}

export default Recipes;
