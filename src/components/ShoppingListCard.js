import { Button, Image, List } from 'semantic-ui-react';

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
        <>
        <div className="card"> 
            <img src={image} alt={name} className="produce-pic"/>
            <h3>{name}</h3>
            <Button onClick={handleRemove}>Remove from List</Button>
        </div>
      </>
    );
}

export default ShoppingListCard; 