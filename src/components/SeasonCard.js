import {Link} from "react-router-dom";
import { Card } from 'semantic-ui-react';

function SeasonCard({season}){
    const {name, image, id} = season
    
    return (
        <div>
            <Link to={`/seasons/${id}`}>
                <Card 
                image={image}
                header={name}
                />
            </Link>
        </div>
    );
}

export default SeasonCard; 
