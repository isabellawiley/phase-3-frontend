import RecipeCard from "./RecipeCard"
import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import { Button } from "semantic-ui-react";

function RecipeList({deleteRecipe}){
    const [recipes, setRecipes] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/recipes/${id}`)
        .then(res => res.json())
        .then(recipe => setRecipes(recipe))
    },[id])

    let recipeList = recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe} />)

    return (
        <div>
            <h2>RecipeList</h2>
            <Button class="ui tiny button">
                <Link to={"/new-recipe"}>Add New Recipe</Link>
                </Button>
            <div>
            {recipeList}
            </div>
        </div>
    );
}

export default RecipeList; 