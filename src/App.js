
import './App.css';
import Nav from './components/Nav'
import Card from './components/Nav'
import { useEffect, useState } from 'react'

function App() {

const [quote, setQuote] = useState("")
const [allQuotes, setAllQuotes] = useState([])

useEffect(() => {
fetch("https://meowfacts.herokuapp.com/?count=20")
  .then(res => res.json())
  .then(data => setAllQuotes(data))

},[])



  return (

    <div className="App">
      <Nav />
      <p>Card</p>
    </div>
  );
}

export default App;
