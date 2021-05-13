import { useState } from "react";
import {useHistory} from "react-router-dom"

function NewRecipeForm(){
    const [name, setName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [link, setLink] = useState("");
    const [difficulty, setDifficulty] = useState(null);
    const [description, setDescription] = useState("");
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault()

        // Promise.all([
        //     fetch(`http://localhost:9292/producerecipes`, {
        //         method: "POST",
        //         headers: {
        //             "Content-type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             recipe_id: 
        //         })
        //     })
        // ])

        fetch(`http://localhost:9292/recipes`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                image: imageURL,
                link: link,
                difficulty: difficulty,
                description: description
            })
        })
        .then(res => res.json())
        .then(() => {
            history.push("/seasons")
            setName("")
            setImageURL("")
            setLink("")
            setDifficulty("")
            setDescription("")
        })


    }

    return (
        <div>
            <h2>NewRecipeForm</h2>
            <form className="recipe-form" onSubmit={handleSubmit}>
                <label htmlFor={"name"} className="recipe-data-field">Recipe Name:</label>
                <input className="recipe-data-field" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor={"imageURL"} className="recipe-data-field">Image URL:</label>
                <input className="recipe-data-field" id="imageURL" type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)}></input>
                <label htmlFor={"link"} className="recipe-data-field">Recipe Link:</label>
                <input className="recipe-data-field" id="link" type="text" value={link} onChange={(e) => setLink(e.target.value)}></input>
                <label htmlFor={"difficulty"} className="recipe-data-field">Difficulty Level:</label>
                <input className="recipe-data-field" id="difficulty" type="number" min="1" max="5" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}></input>
                <label htmlFor={"description"} className="recipe-data-field">Recipe Description:</label>
                <input className="recipe-data-field" id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <input className="recipe-data-field" type="submit" value="Add Your Recipe!"></input>
            </form>
        </div>
    );
}

export default NewRecipeForm; 