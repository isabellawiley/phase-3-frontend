function RecipeCard({recipe}){
    const {name, image} = recipe
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
        </div>
    );
}

export default RecipeCard; 