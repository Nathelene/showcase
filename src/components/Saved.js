
export default function Saved({savedFacts}) {



    const savedArray = savedFacts.map(fact => {
        return (
            <div className="saved-card">
                <p>{fact}</p>
            </div>
        )
    })


    return (
        <div className="saved-facts-container">
            <h2>Saved Facts</h2>
            {savedArray}
        </div>
    )
}