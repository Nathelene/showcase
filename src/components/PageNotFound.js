import { NavLink } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="page-not-found">
            <h2>404 page not found</h2>
            <NavLink to="/">
                <p>Please Try Again</p>
            </NavLink>
        </div>
    )

}