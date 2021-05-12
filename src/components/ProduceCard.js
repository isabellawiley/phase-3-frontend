function ProduceCard({produce}){
    return (
        <div>
            <h2>{produce.name}</h2>
            <img src={produce.image} alt={produce.name}/>
        </div>
    );
}

export default ProduceCard; 