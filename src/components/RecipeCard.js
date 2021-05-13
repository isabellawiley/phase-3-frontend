
import RecipeDetails from "./RecipeDetails"

function RecipeCard({recipe}){
    const {name, image} = recipe
    return (
        <div className="card">
              <img src={image} alt={name} className="produce-pic"/>
              <h3>{name}</h3>
              <RecipeDetails recipe={recipe}/>
        </div>
    );
}

export default RecipeCard; 