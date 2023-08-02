
import './App.css';
import Nav from './components/Nav'
import Card from './components/Card'
import Saved from './components/Saved'
import { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import getImage from './components/ApiCalls';
import PageNotFound from './components/PageNotFound';

function App() {

const [fact, setFact] = useState("")
const [allFacts, setAllFacts] = useState([])
const [gif, setGif] = useState("")
const [savedFacts, setSavedFacts] = useState([])
const [saved, setSaved] = useState('bookmark')
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)

useEffect(() => {
setLoading(true)
fetch("https://meowfacts.herokuapp.com/?count=100")
  .then(res => {
    if(!res.ok) {
      throw Error('Unexpected error. Please refresh the page')
    }
    return res.json()
  })
  .then(data => {
    setAllFacts(data.data)
    setSaved('bookmark')
    // setLoading(false)
    setError('')
})
.catch(err => {
  setLoading(false)
  setError(err.message)
})

},[])

useEffect(() => {
 setLoading(true)
     fetch("https://cataas.com/cat/gif")
     .then(res => {
      if(!res.ok) {
        throw Error('Unexpected error. Please refresh the page')
      }
      return res
    })
      .then(data => {
        setGif(data.url)
        setLoading(true)
        setError('')
      })
      .catch(err => {
        setLoading(false)
        setError(err.message)
      })
    
  },[])

function getFact() {
  const randomNum = Math.floor(Math.random() * allFacts.length)
  const currentFact = allFacts[randomNum]
  setFact(currentFact)
  setSaved('bookmark')
  {savedFacts.some(fact=> fact === currentFact)? setSaved('bookmark_added') : setSaved('bookmark')}
}

function toggleSavedFacts(index) {
  const newSaved = saved === 'bookmark' ? 'bookmark_added' : 'bookmark'
  setSaved(newSaved)
  { saved === 'bookmark' && setSavedFacts([...savedFacts, fact])}
  { saved === 'bookmark_added' && removeFact(index)}

}

function removeFact() {
  const filteredFacts = savedFacts.filter(f =>  f !== fact)
  setSavedFacts(filteredFacts)
}

function deleteSaved(index) {
  let filterSaved = savedFacts.filter((fact, i) => i !== index);
  setSavedFacts(filterSaved);
  setSaved('bookmark')
}

  return (

    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lumanosimo&family=Roboto:wght@100&display=swap" rel="stylesheet"/>
      <Nav />
        <Routes>
          <Route path="/" element={ 

          <div className="home">
            {error && <h1 className="error-message">{error}</h1>}
            {!fact && 
            <div className="intro">
            <h2>Welcome Cat Lovers!</h2>
            <p>Click below to learn more about your Meow-velous companion!</p>
            </div>}
            
            <button className="get-random-button" onClick={getFact}>Get New Fact<span className="space">*</span>
            <span class="material-symbols-outlined">pets</span></button>
            {fact?  <Card loading={loading} gif={gif} saved={saved} toggleSavedFacts={toggleSavedFacts} factText={fact}  /> : <p></p>}
          
            </div>} />

            <Route path="/saved" element={<Saved error={error} fact={fact} deleteSaved={deleteSaved} savedFacts={savedFacts}/>} />
            <Route path="/404" element={<PageNotFound />} />
        </Routes>
    </div>

  );
}

export default App;
