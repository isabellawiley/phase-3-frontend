import { useState } from "react";
import {useHistory} from "react-router-dom"
import MultiSelect from "react-multi-select-component";

function NewRecipeForm(){
    const [name, setName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [link, setLink] = useState("");
    const [difficulty, setDifficulty] = useState(null);
    const [description, setDescription] = useState("");
    // const [produceOne, setProduceOne] = useState("");
    const [selected, setSelected] = useState([]);
    // const [produceTwo, setProduceTwo] = useState("");
    const history = useHistory();

    const options = [
        {label: "Cucumber", value: "Cucumber"},
        {label: "Kale", value: "Kale"},
        {label: "Broccoli", value: "Broccoli"},
        {label: "Tomato", value: "Tomato"},
    ]

    

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
                description: description,
                produceArr: selected
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
            setSelected([])
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
                <label htmlFor="produce-one" className="recipe-data-field">Produce</label>
                <MultiSelect 
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
                />
                <input className="recipe-data-field" type="submit" value="Add Your Recipe!"></input>
                {/* <select className="recipe-data-field" id="produce-one" value={produceOne} onChange={(e) => setProduceOne(e.target.value)} name="produce-one">
                    <option value="">Select Produce</option>
                    <option value="Cucumber">Cucumber</option>
                    <option value="Kale">Kale</option>
                    <option value="Broccoli">Broccoli</option>
                    <option value="Tomato">Tomato</option>
                </select> */}
                {/* <label htmlFor="produce-two" className="recipe-data-field">Produce</label>
                <select className="recipe-data-field" id="produce-two" value={produceTwo} onChange={(e) => setProduceTwo(e.target.value)} name="produce-two">
                    <option value="">Select Produce</option>
                    <option value="Cucumber">Cucumber</option>
                    <option value="Kale">Kale</option>
                    <option value="Broccoli">Broccoli</option>
                    <option value="Tomato">Tomato</option>
                </select> */}
            </form>
        </div>
    );
}

export default NewRecipeForm; 