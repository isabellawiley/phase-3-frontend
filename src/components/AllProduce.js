import ProduceCard from "./ProduceCard";
import {useState, useEffect} from "react";


function AllProduce(){
    const [allProduce, setAllProduce] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:9292/produces`)
        .then(res => res.json())
        .then(produce => setAllProduce(produce))
    },[])
    
    let produceList = allProduce.map((produce) => <ProduceCard key={produce.id} produce={produce}/>)
    
    return (
        <div>
            <h2>All Produce</h2>
            {produceList}
        </div>
    );
}

export default AllProduce; 