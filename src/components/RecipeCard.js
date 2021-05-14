import { Button } from "semantic-ui-react";
import RecipeDetails from "./RecipeDetails"

function RecipeCard({recipe, produceArr}){
    const {name, image} = recipe
    const recipeName = name.toLowerCase().split(' ').join('-')

    function handleDelete(){
        fetch(`http://localhost:9292/recipes/${recipeName}`, {
            method: "DELETE",
        })
        // .then(res => res.json())
        // .then(() => {
        //     // deleteRecipe(name)
        // })

        // need to update state so we don't have to refresh
    }

    return (
        <div className="card">
              <img src={image} alt={name} className="produce-pic"/>
              <h3>{name}</h3>
              <RecipeDetails recipe={recipe} produceArr={produceArr}/>
              <Button class="ui tiny button" onClick={handleDelete}>Delete</Button>
        </div>
    );
}

export default RecipeCard; 