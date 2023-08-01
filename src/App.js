
import './App.css';
import Nav from './components/Nav'
import Card from './components/Card'
import Saved from './components/Saved'
import { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import getImage from './components/ApiCalls';

function App() {

const [fact, setFact] = useState("")
const [allFacts, setAllFacts] = useState([])
const [gif, setGif] = useState("")
const [savedFacts, setSavedFacts] = useState([])
const [saved, setSaved] = useState('save')

useEffect(() => {
fetch("https://meowfacts.herokuapp.com/?count=100")
  .then(res => res.json())
  .then(data => {
    
    setAllFacts(data.data)
    setSaved('save')
})

},[])

useEffect(() => {

  getImage()
    .then(data => setGif(data.url))

  },[])

function getFact() {
  const randomNum = Math.floor(Math.random() * allFacts.length)
  const currentFact = allFacts[randomNum]
  setFact(currentFact)
  setSaved('saved')
  {savedFacts.some(fact=> fact === currentFact)? setSaved('saved') : setSaved('save')}
}

function toggleSavedFacts(index) {
  const newSaved = saved === 'save' ? 'saved' : 'save'
  setSaved(newSaved)
  { saved === 'save' && 

  setSavedFacts([...savedFacts, fact])}
  { saved === 'saved' && removeFact(index)}

}

function removeFact() {
  const filteredFacts = savedFacts.filter(f => {
    return f !== fact 
  })
  setSavedFacts(filteredFacts)
}

function deleteSaved(index) {
  let filterSaved = savedFacts.filter((fact, i) => i !== index);
  setSavedFacts(filterSaved);
  setSaved('save')
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
        
        {fact?  <Card saved={saved} toggleSavedFacts={toggleSavedFacts} factText={fact}  /> : <p></p>}
       
      </div>}/>

     <Route path="/saved" element={<Saved fact={fact} deleteSaved={deleteSaved} savedFacts={savedFacts}/>} />
      
    </Routes>
    </div>

  );
}

export default App;
