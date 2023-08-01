
import { NavLink } from "react-router-dom"
import './Saved.css'

export default function Saved({savedFacts,deleteSaved}) {

            const savedArray = savedFacts.map((fact, index) => {
                return (
                <div className="save-card-container">
                  <div className="saved-card" key={index}>
                    <p>{fact}</p>
                  </div>
                  <button className="delete-button" onClick={() => deleteSaved(index)}><span class="material-symbols-outlined">
delete
</span></button>
                  </div>
                );
              });
        
    
    return (
        <div className="saved-facts-container">

            <h3 className="saved-title">{savedArray.length} saved facts</h3>
            <NavLink to='/'>
            <button className="back-button"><span class="material-symbols-outlined">
arrow_back
</span></button>
            </NavLink>
            {savedArray}
        </div>
    )
}
