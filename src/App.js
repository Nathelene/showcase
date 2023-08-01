
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
const [saved, setSaved] = useState('bookmark')

useEffect(() => {
fetch("https://meowfacts.herokuapp.com/?count=100")
  .then(res => res.json())
  .then(data => {
    
    setAllFacts(data.data)
    setSaved('bookmark')
})

},[])

// useEffect(() => {

  // getImage()
  //   .then(data => setGif(data.url))

  // },[gif])

function getFact() {
  const randomNum = Math.floor(Math.random() * allFacts.length)
  const currentFact = allFacts[randomNum]
  setFact(currentFact)
  setSaved('bookmark')
  getImage()
    .then(data => setGif(data.url))
 
  {savedFacts.some(fact=> fact === currentFact)? setSaved('bookmark_added') : setSaved('bookmark')}
}

function toggleSavedFacts(index) {
  const newSaved = saved === 'bookmark' ? 'bookmark_added' : 'bookmark'
  setSaved(newSaved)
  { saved === 'bookmark' && 

  setSavedFacts([...savedFacts, fact])}
  { saved === 'bookmark_added' && removeFact(index)}

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
  setSaved('bookmark')
}


  return (

    <div className="App">
      <Nav />
    <Routes>
      <Route path="/" element={ 

      <div className="home">
        
        {!fact && 
        <>
        <h2>Welcome!</h2>
        <p>Click Here For More Facts About Your Feline Friend !</p>
        </>}
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <button className="get-random-button" onClick={getFact}>Get New Fact<span className="space">*</span><span class="material-symbols-outlined">
pets
</span></button>
        
        {fact?  <Card gif={gif} saved={saved} toggleSavedFacts={toggleSavedFacts} factText={fact}  /> : <p></p>}
       
      </div>}/>

     <Route path="/saved" element={<Saved fact={fact} deleteSaved={deleteSaved} savedFacts={savedFacts}/>} />
      
    </Routes>
    </div>

  );
}

export default App;
