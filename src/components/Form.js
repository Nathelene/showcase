import { NavLink } from "react-router-dom"
import { useState } from 'react'
import PropTypes from 'prop-types';


const Form = ({addNewFact}) => {

 
    const [newFact, setNewFact] = useState('')

    let submitNew = (e) => {

        e.preventDefault()

            addNewFact(newFact)
            setNewFact('')
        
    }

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

                <button className="add-button" onClick={submitNew}>ADD</button>

            </div>
        )
}

Form.prototypes = {
    addNewFact: PropTypes.func.isRequired
}


export default Form