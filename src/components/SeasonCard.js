import { useEffect } from "react";

function SeasonCard({season, setClickedSeason}){
    const {name, image, id} = season
    
    function handleClick(e) {
        setClickedSeason(id)
    }

    return (
        <div>
            <h1>{name}</h1>
            <img onClick={handleClick} src={image}></img>
        </div>
    );
}

export default SeasonCard; 
