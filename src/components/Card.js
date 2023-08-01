
export default function Card({factText, toggleSavedFacts,saved}) {



    return (

        <div className="fact-card">
           <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
             <p>{factText}</p>
             <button onClick={toggleSavedFacts} className="save-button"> 
               {saved}<span class="material-symbols-outlined">
pets
</span>
            </button>
           
        </div>

    
    )
}