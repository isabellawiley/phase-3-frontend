

function ProduceCard({produce}){
    const {name, image, id} = produce
    function handleAddProduceClick(){
        fetch(`http://localhost:9292/produces/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                on_list: true
            })
        })
        .then(r => r.json())
        .then((updatedProduce) => updatedProduce)
    }

    return (
        <div className="card"> 
            <img src={image} alt={name} className="produce-pic"/>
            <h3>{name}</h3>
            <button onClick={handleAddProduceClick} >Add to Shopping List</button>
        </div>
    );
}

export default ProduceCard; 