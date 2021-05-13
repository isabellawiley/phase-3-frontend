import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="navbar">
            <nav>
                <NavLink to="/recipes">View All Recipes</NavLink>
                <NavLink to="/produce">View All Produce</NavLink>
                <NavLink to="/seasons">Season List</NavLink>
                <NavLink to="/shopping-list">Shopping List</NavLink>
            </nav>
        </div>
    );
}

export default NavBar; 