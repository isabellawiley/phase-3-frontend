import {Card} from "semantic-ui-react"

function RecipeCard({recipe}){
    const {name, image} = recipe
    return (
        <div className="card">
              <img src={image} alt={name}/>
              <h3>{name}</h3>
        </div>
    );
}

export default RecipeCard; 