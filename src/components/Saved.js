
import { NavLink } from "react-router-dom"
import './Saved.css'

export default function Saved({savedFacts,deleteSaved}) {

            const savedArray = savedFacts.map((fact, index) => {
                return (
                  <div className="saved-card" key={index}>
                    <p>{fact}</p>
                    <button onClick={() => deleteSaved(index)}>Delete</button>
                  </div>
                );
              });
        
    
    return (
        <div className="saved-facts-container">

            <h2>Saved Facts</h2>
            <NavLink to='/'>
            <button>Home</button>
            </NavLink>
            {savedArray}
        </div>
    )
}
