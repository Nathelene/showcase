import { NavLink } from "react-router-dom"
import { useState } from 'react'


export default function Form() {

 
const [newFact, setNewFact] = useState('')




    return (
        <div className='form'>
            <h3>Add A New Fact To The Collection!</h3>
             <NavLink to='/'>
              <button className="back-button">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            </NavLink>

            <input 
                type='text'
                value={newFact}
                name="newFact"
                placeholder="Add New Fact Here"
                onChange={(e) => setNewFact(e.target.value)}
            />
            
        </div>
    )
}