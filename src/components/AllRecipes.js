import RecipeCard from "./RecipeCard";
import {useState, useEffect} from "react";


function AllRecipes(){
    const [recipes, setRecipes] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:9292/recipes`)
        .then(res => res.json())
        .then(recipe => setRecipes(recipe))
    },[])
    
    let recipeList = recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe}/>)
    
    return (
        <div>
            <h2>All Recipes</h2>
            {recipeList}
        </div>
    );
}

export default AllRecipes; 