
import './Card.css'
import PropTypes from 'prop-types';

export default function Card({factText, toggleSavedFacts,saved,gif,loading}) {

    return (
        <div className="fact-container">
            {loading? <p className="loading-message">loading img...</p> : <img className="cat-gif" src={gif}/>}
          <div className="fact-card">
             <p>{factText}</p>
          </div>
            <button onClick={toggleSavedFacts} className="save-button"> 
                <span class="material-symbols-outlined">{saved}</span>
            </button>
        </div>
    )
}

Card.propTypes = {
    factText: PropTypes.string.isRequired,
    toggleSavedFacts: PropTypes.func.isRequired,
    saved: PropTypes.string.isRequired,
    gif: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired
  }