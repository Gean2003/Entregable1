import React from 'react'

const ButtonQuote = ({randomColors, getRandomAll}) => {
const objectBgStyle = {
	backgroundColor: randomColors
    }

    return (
    <div className="quote__btn-container">
			<button className="quote__btn"  onClick={getRandomAll}  style = {objectBgStyle}>&#62;</button>
		</div>
    )
}

export default ButtonQuote
