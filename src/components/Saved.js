
import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types';
import './Saved.css'

export default function Saved({savedFacts,deleteSaved,error}) {

  const savedArray = savedFacts.map((fact, index) => {
      return (
          <div className="save-card-container">
            <div className="saved-card" key={index}>
              <p>{fact}</p>
            </div>
            <button className="delete-button" onClick={() => deleteSaved(index)}>
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        )
     });
        
    return (
        <div>
          { error ? <h1 className="error-message">{error}</h1> :
          <div className="saved-facts-container">
            <h3 className="saved-title">{savedArray.length} saved facts</h3>
            <NavLink to='/'>
              <button className="back-button">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            </NavLink>
              {savedArray}
          </div> }
        </div>
     )
  };

Saved.propTypes = {
  error: PropTypes.string.isRequired,
  deleteSaved: PropTypes.func.isRequired,
  savedFacts: PropTypes.array.isRequired,
}