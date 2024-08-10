import { NavLink } from "react-router-dom"
import { useState } from 'react'
import PropTypes from 'prop-types';
import './Form.css'


const Form = ({addNewFact}) => {

 
    const [newFact, setNewFact] = useState('')
    const [confirmation, setConfirmation] = useState(false)

    let submitNew = (e) => {

        e.preventDefault()

            addNewFact(newFact)
            setNewFact('')
            setConfirmation(true)
           
    }

    let reset = () => {

        setConfirmation(false)
    }
    

        return (
            <div className='form'>
                {confirmation ? <h3>Your fact has been submitted!</h3> : <h3>Add A New Fact To The Collection!</h3>}
                <NavLink to='/'>
                <button className="form-back-button" onClick={reset}>
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