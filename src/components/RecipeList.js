import RecipeCard from "./RecipeCard"
import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import { Card } from "semantic-ui-react";

function RecipeList(){
    const [recipes, setRecipes] = useState([])
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:9292/recipes/${id}`)
        .then(res => res.json())
        .then(recipe => setRecipes(recipe))
    },[id])

    let recipeList = recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe}/>)
    return (
        <div>
            <h1>RecipeList</h1>
            <button>
                <Link to={"/new-recipe"}>Add New Recipe</Link>
            </button>
            {recipeList}
        </div>
    );
}

export default RecipeList; 