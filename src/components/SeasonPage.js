import Filter from "./Filter";
import SeasonCard from "./SeasonCard";
import {useEffect, useState} from "react";

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
            <h1>SeasonPage</h1>
            {seasonList}
            <Filter />
        </div>
    );
}

export default SeasonPage; 