import {useState, useEffect} from "react";
import ProduceCard from "./ProduceCard";

function ShoppingList(){
    const [shoppingList, setShoppingList] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:9292/produces`)
        .then(res => res.json())
        .then(produce => setShoppingList(produce))
    },[])
    console.log(shoppingList)
    let produceList = shoppingList.map((listItem) => <ProduceCard key={listItem.id} produce={listItem}/>)
    
    
    return (
        <div>
            <h2>To Buy</h2>
            {produceList}
        </div>
    );
}

export default ShoppingList; 