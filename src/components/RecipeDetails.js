import {Modal, Image, Button} from "semantic-ui-react"
import {useState} from "react";

function RecipeDetails({recipe}){
    const {name, description, link, difficulty, image} = recipe
    const [open, setOpen] = useState(false)

    return (
        <Modal onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open} trigger={<Button class="ui small button">More Details</Button>}>
        <h2 className="modalheader">{name}</h2>
        <Modal.Content image>
        <Image size='medium' src={image} wrapped alt={name}/>
        <Modal.Description>
          <p className="modaltext">{description}</p>
          <p className="modaltext">Difficulty Level: {difficulty}</p>
          <a className="modallink" href={link} target="_blank" rel="noreferrer">See the full recipe!</a>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    );
}

export default RecipeDetails; 