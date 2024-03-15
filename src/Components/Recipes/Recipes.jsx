import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";
const Recipes = ({handleAddToCook}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

 



  return (
    <div className="w-3/5">
      <div className="grid grid-cols-2 gap-5 ">
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} handleAddToCook={handleAddToCook} />
      ))}
      </div>
    </div>
   
  );
};

Recipes.propTypes = {
    handleAddToCook:PropTypes.func.isRequired
};

export default Recipes;
