import { useEffect, useState } from "react";
import ProduceCard from "./ProduceCard"
import {Link, useParams} from "react-router-dom"

function ProduceList(){
    const [produces, setProduces] = useState([])
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:9292/seasons/${id}`)
        .then(res => res.json())
        .then(produce => setProduces(produce))
    },[id])

    console.log(produces)

    let produceList = produces.map((produce) => <ProduceCard key={produce.id} produce={produce}/>)

    return (
        <div>
            <h1>ProduceList</h1>
            <button>
                <Link to={`/recipes/${id}`}>View By Recipe</Link>
            </button>
            {produceList}
        </div>
    );
}

export default ProduceList; 