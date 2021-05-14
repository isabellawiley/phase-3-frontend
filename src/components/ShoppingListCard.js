
function ShoppingListCard({produce, onRemoveFromList}){
    const {name, image, id} = produce

    function handleRemove(){
        fetch(`http://localhost:9292/produces/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                on_list: false
            })
        })
        .then(r => r.json())
        .then((updatedProduce) => updatedProduce)
            // onRemoveFromList([updatedProduce])
        // })
    }

    return (
        <div className="card"> 
            <img src={image} alt={name} className="produce-pic"/>
            <h3>{name}</h3>
            <button onClick={handleRemove}>Remove from List</button>
        </div>
    );
}

export default ShoppingListCard; 