
import './App.css';
import Nav from './components/Nav'
import Card from './components/Card'
import Saved from './components/Saved'
import { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'

function App() {

const [fact, setFact] = useState("")
const [allFacts, setAllFacts] = useState([])
const [gif, setGif] = useState("")

useEffect(() => {
fetch("https://meowfacts.herokuapp.com/?count=40")
  .then(res => res.json())
  .then(data => setAllFacts(data.data))

},[])

useEffect(() => {
  fetch("https://cataas.com/cat/gif")
    .then(res => res)
    .then(data => setGif(data.url))
  },[fact])



function getFact() {
  const randomNum = Math.floor(Math.random() * allFacts.length)
  const currentFact = allFacts[randomNum]
  setFact(currentFact)
}

  return (

    <div className="App">
      <Nav />
    <Routes>
      <Route path="/" element={ 

      <div className="home">
        <h2>Welcome!</h2>
        <img className="cat-gif" src={gif}/>
        <p>Click Here For More Facts About Your Feline Friend !</p>
        <button className="get-random-button" onClick={getFact}>Get New Fact</button>
        
        {fact?  <Card factText={fact}  /> : <p></p>}
       
      </div>}/>

     <Route path="/saved" element={<Saved />} />
      
      </Routes>
    </div>

  );
}

export default App;
