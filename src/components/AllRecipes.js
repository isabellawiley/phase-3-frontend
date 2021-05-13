import RecipeCard from "./RecipeCard";
import {useState, useEffect} from "react";


function AllRecipes(){
    const [recipes, setRecipes] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:9292/recipes`)
        .then(res => res.json())
        .then(recipe => setRecipes(recipe))
    },[])
    console.log(recipes)
    let recipeList = recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe}/>)
    
    return (
        <div>
            <h1>All Recipes</h1>
            {recipeList}
        </div>
    );
}

export default AllRecipes; 