
import { NavLink } from "react-router-dom"
import './Nav.css'

const Nav = () => {

    return(
        <nav className="nav">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <NavLink to='/' style={{textDecoration:'none'}}>
                <h1 className="header">Feline Facts</h1>
            </NavLink>
            <NavLink to="/addFact">
                <button className="add-fact-button">
                  <span className="material-symbols-outlined">add</span>
                </button>
            </NavLink>
            <NavLink to="/saved">
                <button className="saved-button">
                  <span className="material-symbols-outlined">bookmarks</span>
                </button>
            </NavLink>
        </nav>
    )
};

export default Nav