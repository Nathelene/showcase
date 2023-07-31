



export default function Card({factText,toggleSavedFacts}) {



    return (

        <div className="fact-card">
           
             <p>{factText}</p>
             <button onClick={toggleSavedFacts} className="save-button">SAVE</button>
           
        </div>

    
    )
}