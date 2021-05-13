import Filter from "./Filter";
import SeasonCard from "./SeasonCard";
import {useEffect, useState} from "react";
import { Card } from 'semantic-ui-react'

function SeasonPage(){
    const [seasons, setSeasons] = useState([])

    useEffect(()=> {
        fetch("http://localhost:9292/seasons")
        .then(r => r.json())
        .then(seasonData => setSeasons(seasonData))
    }, [])
    
    let seasonList = seasons.map((season) => <SeasonCard key={season.id} season={season}/>)
    

    return (
        <div>
            <h2>Choose a season to get started</h2>
            <Card.Group itemsPerRow={2}>
                {seasonList}
            </Card.Group>
            <Filter />
        </div>
    );
}

export default SeasonPage; 