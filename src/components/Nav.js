
import { NavLink } from "react-router-dom"

export default function Nav() {


    return(
        < nav className="nav">
            <h1>Cat App</h1>
            <NavLink to='/saved'>
            <button>Saved Facts</button>
            </NavLink>
        </nav>
       
    )
}
