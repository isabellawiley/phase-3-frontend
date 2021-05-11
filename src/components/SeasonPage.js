import Filter from "./Filter";
import ProduceList from "./ProduceList";
import RecipeList from "./RecipeList";
import SeasonCard from "./SeasonCard";
import {useEffect, useState} from "react";

function SeasonPage(){
    const [seasons, setSeasons] = useState([])
    const [clickedSeason, setClickedSeason] = useState(null)

    useEffect(()=> {
        fetch("http://localhost:9292/seasons")
        .then(r => r.json())
        .then(seasonData => setSeasons(seasonData))
    }, [])
    
    let seasonList = seasons.map((season) => <SeasonCard key={season.id} season={season} setClickedSeason={setClickedSeason}/>)
    
    return (
        <div>
            <h1>SeasonPage</h1>
            {seasonList}
            <ProduceList clickedSeason={clickedSeason}/> 
            <RecipeList clickedSeason={clickedSeason}/>
            <Filter />
        </div>
    );
}

export default SeasonPage; 