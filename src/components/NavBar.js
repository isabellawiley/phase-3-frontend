import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="navbar">
            <nav>
                <NavLink to="/shopping-list">Shopping List</NavLink>
                <NavLink to="/recipes">View All Recipes</NavLink>
                <NavLink to="/seasons">Season List</NavLink>
            </nav>
        </div>
    );
}

export default NavBar; 