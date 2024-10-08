
import './App.css';
import Nav from './components/Nav'
import Card from './components/Card'
import Saved from './components/Saved'
import Form from './components/Form'
import PageNotFound from './components/PageNotFound';
import { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'

const App = () => {

const [fact, setFact] = useState("")
const [allFacts, setAllFacts] = useState([])
const [gif, setGif] = useState("")
const [savedFacts, setSavedFacts] = useState([])
const [saved, setSaved] = useState('bookmark')
const [error, setError] = useState('')
const [loading, setLoading] = useState(true)

useEffect(() => {

  loadFact()

},[]);


let loadFact = async() => {

  try {

    const res = await fetch("https://meowfacts.herokuapp.com/?count=50")
    const data = await res.json()
  
    if(!res.ok) {
            throw Error('Unexpected error. Please refresh the page')
          }
  
        setAllFacts(data.data)
        setSaved('bookmark')

  } catch(err) {
    setError(err.message)
  }

}



useEffect(() => {

  loadGif()
  
},[]);


const loadGif = async() => {

  try {

    const res = await fetch("https://cataas.com/cat/gif")

    if(!res.ok) {
          throw Error('Unexpected error. Please refresh the page')
        }
   
        setGif(res.url)
        setLoading(false)

  } catch(err) {

    setLoading(false)
    setError(err.message)

  }
}



let getFact = () => {
  const randomNum = Math.floor(Math.random() * allFacts.length)
  const currentFact = allFacts[randomNum]
  setFact(currentFact)
  setSaved('bookmark')
  {savedFacts.some(fact=> fact === currentFact)? setSaved('bookmark_added') : setSaved('bookmark')}
}

let toggleSavedFacts = (index) => {
  const newSaved = saved === 'bookmark' ? 'bookmark_added' : 'bookmark'
  setSaved(newSaved)
  { saved === 'bookmark' && setSavedFacts([...savedFacts, fact])}
  { saved === 'bookmark_added' && removeFact(index)}
}

let removeFact = () => {
  const filteredFacts = savedFacts.filter(f =>  f !== fact)
  setSavedFacts(filteredFacts)
}

let deleteSaved = (index) => {
  let filterSaved = savedFacts.filter((fact, i) => i !== index);
  setSavedFacts(filterSaved);
  setSaved('bookmark')
}

let addNewFact = (newFact) => {

  setAllFacts([...allFacts, newFact])
  
}


  return (

    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lumanosimo&family=Roboto:wght@100&display=swap" rel="stylesheet"/>
      <Nav />
        <Routes>
          <Route path="/" element={ 

          <div className="home">
            { error ? <h3 className="error-message">{error}</h3> :
            !fact && 
            <>
            <div className="intro">
              <h2>Welcome Cat Lovers!</h2>
              <p>Click below to learn more about your Meow-velous companion!</p>
            </div>
              <button className="get-random-button" onClick={getFact}>Get New Fact<span className="space">*</span> 
              <span className="material-symbols-outlined">pets</span></button>
            </> }
            {fact?  
              <>
              <button className="get-random-button" onClick={getFact}>Get New Fact<span className="space">*</span> 
              <span className="material-symbols-outlined">pets</span></button><Card loading={loading} gif={gif} saved={saved} toggleSavedFacts={toggleSavedFacts} factText={fact} />
              </> : <p></p> }
            </div> } />
            <Route path="/addFact" element={<Form addNewFact={addNewFact}/>} />
            <Route path="/saved" element={<Saved error={error} fact={fact} deleteSaved={deleteSaved} savedFacts={savedFacts}/> } />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  )
};

export default App;
