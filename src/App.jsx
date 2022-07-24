import { useState } from 'react'
import quotes from './json/quotes.json'
import colors from './utils/colors'
import QuoteBox from './components/QuoteBox'

function App() {
    
    const getRandomElement = arr =>{
	const indexRandom = Math.floor(Math.random() * arr.length)
	return arr[indexRandom]
    }

    let quoteRandom = getRandomElement(quotes)
    let colorRandom = getRandomElement(colors)

    const [randomQuotes, setRandomQuotes] = useState(quoteRandom)
    const [randomColors, setRandomColors] = useState(colorRandom)

    const objStyle = {
	backgroundColor: randomColors
    }

    const getRandomAll = () =>{
	quoteRandom = getRandomElement(quotes)
	colorRandom = getRandomElement(colors)

	setRandomColors(colorRandom)
	setRandomQuotes(quoteRandom)
    }



  return (
    <div className="App" style={objStyle}>
	<QuoteBox 
	randomQuotes={randomQuotes}
	randomColors={randomColors}
	getRandomAll={getRandomAll}
	/>

    </div>
  )
}

export default App
