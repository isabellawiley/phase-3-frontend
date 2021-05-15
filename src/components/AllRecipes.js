import RecipeCard from "./RecipeCard";

function AllRecipes({recipeArr}){
    
    let recipeList = recipeArr.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe}/>)
    
    return (
        <div>
            <h2>All Recipes</h2>
            {recipeList}
        </div>
    );
}

export default AllRecipes; 