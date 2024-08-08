import { NavLink } from "react-router-dom"


export default function Form() {


    return (
        <div className='form'>
            <h3>Add A New Fact To The Collection!</h3>
             <NavLink to='/'>
              <button className="back-button">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            </NavLink>
        </div>
    )
}