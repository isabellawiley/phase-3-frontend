import { useState, useEffect } from "react";
import ShoppingListCard from "./ShoppingListCard";

function ShoppingList(){
    const [produces, setProduces] = useState([]);
    // const [shoppingList, setShoppingList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9292/produces`)
        .then(res => res.json())
        .then((produce) => setProduces(produce))
      },[])

    // function handleRemoveProduceFromList(item){
    //     const removeItem = shoppingList.filter((produce) => produce !== item);
    //     setShoppingList(removeItem);
    // }
    
    let filteredList = produces.filter((produce) => produce.on_list === true)
    
    let list = filteredList.map((produce) => <ShoppingListCard key={produce.id} produce={produce} />)
    // setShoppingList(list)

    return (
        <div>
            <h2>Shopping List</h2>
            {list}
        </div>
    );
}

export default ShoppingList; 