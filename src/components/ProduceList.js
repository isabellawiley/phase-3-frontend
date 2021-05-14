import { useEffect, useState } from "react";
import ProduceCard from "./ProduceCard"
import {Link, useParams} from "react-router-dom"


function ProduceList({onAddToList}){
    const [produces, setProduces] = useState([])
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:9292/seasons/${id}`)
        .then(res => res.json())
        .then(produce => setProduces(produce))
    },[id])

    let produceList = produces.map((produce) => <ProduceCard key={produce.id} produce={produce} onAddToList={onAddToList}/>)

    return (
        <div>
            <h2>Produce List</h2>
            <button>
                <Link to={`/recipes/${id}`}>View By Recipe</Link>
            </button>
            <div>
            {produceList}
            </div>
        </div>
    );
}

export default ProduceList; 