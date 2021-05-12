import {Link} from "react-router-dom";

function SeasonCard({season}){
    const {name, image, id} = season
    
    return (
        <div>
            <Link to={`/seasons/${id}`}>
                <h1>{name}</h1>
                <img src={image} alt={name}/>
            </Link>
        </div>
    );
}

export default SeasonCard; 
