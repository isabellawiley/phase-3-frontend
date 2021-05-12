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
            <h1>NewRecipeForm</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor={"name"}>Recipe Name:</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor={"imageURL"}>Image URL:</label>
                <input id="imageURL" type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)}></input>
                <label htmlFor={"link"}>Recipe Link:</label>
                <input id="link" type="text" value={link} onChange={(e) => setLink(e.target.value)}></input>
                <label htmlFor={"difficulty"}>Difficulty Level:</label>
                <input id="difficulty" type="number" min="1" max="5" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}></input>
                <label htmlFor={"description"}>Recipe Description:</label>
                <input id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <input type="submit" value="Add Your Recipe!"></input>
            </form>
        </div>
    );
}

export default NewRecipeForm; 