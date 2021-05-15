import SeasonCard from "./SeasonCard";
import { Card } from 'semantic-ui-react'

function SeasonPage({seasons}){
    
    let seasonList = seasons.map((season) => <SeasonCard key={season.id} season={season} />)
    
    return (
        <div id="season-content">
            <h2>Choose a season to get started</h2>
            <Card.Group itemsPerRow={2}>
                {seasonList}
            </Card.Group>
        </div>
    );
}

export default SeasonPage; 