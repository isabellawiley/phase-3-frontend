

function ProduceCard({produce}){
    
    return (
        <div className="card"> 
            <img src={produce.image} alt={produce.name} className="produce-pic"/>
            <h3>{produce.name}</h3>
            <a>See recipe inspirations</a>
        </div>
    );
}

export default ProduceCard; 