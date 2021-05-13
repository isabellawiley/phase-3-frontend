import {Card} from "semantic-ui-react"

function RecipeCard({recipe}){
    const {name, image} = recipe
    return (
        <div>
            <Card>
              header={name}
              image={image}
            </Card>
        </div>
    );
}

export default RecipeCard; 