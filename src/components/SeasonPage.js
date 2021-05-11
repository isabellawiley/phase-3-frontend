import Filter from "./Filter";
import ProduceList from "./ProduceList";
import RecipeList from "./RecipeList";

function SeasonPage(){
    return (
        <div>
            <h1>SeasonPage</h1>
            <ProduceList /> 
            <RecipeList />
            <Filter />
        </div>
    );
}

export default SeasonPage; 