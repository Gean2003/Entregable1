import React from 'react'
import '../styles/QuoteBox.css'
import ButtonQuote from './ButtonQuote'

const QuoteBox = ({randomQuotes, randomColors, getRandomAll}) => {

    const objectStyle = {
	color: randomColors
    }

    

    return (
	<article className="quote__card" style={objectStyle}>
	    <div className="quote__index ">
		<i className="fa-solid fa-quote-left quotes-icon"></i>
		<h2 className="quote__name">{`${randomQuotes.quote}`}</h2>
	    </div>
		<p className="quote__author">{`${randomQuotes.author}`}</p>
	    <ButtonQuote randomColors={randomColors} getRandomAll={getRandomAll}/>
	</article>
    )
}

export default QuoteBox
