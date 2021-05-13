import NavBar from "./NavBar";
import {useHistory} from "react-router-dom";

function Header(){
    const history = useHistory()

    function handleHomeClick(){
        history.push("/seasons")
    }

    return (
        <div className="header">
            <img src="https://imgmedia.lbb.in/media/2020/05/5ed0b0441477ba1119fce215_1590734916904.jpg"/>
            <h1 onClick={handleHomeClick}>Season's Eatings</h1>
            <NavBar />
        </div>
    );
}

export default Header; 