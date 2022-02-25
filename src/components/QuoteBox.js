import React, { useState } from 'react';
import '../styles/QuoteBox.css';
import { quotes } from '../data/quotes';

const QuoteBox = () => {
    
    const getRandomIndex = (value) => 
    Math.round(Math.random() * ((quotes.length-1) - 0) + 0);

    const [quote, setQuote] = useState(quotes[getRandomIndex()])
    console.log(quote);

    const handleNewQuote = () => {
        setQuote(quotes[getRandomIndex()])
    }


    return (
        <div id='quote-box'>
            <h2 id='text'>"{quote.text}"</h2>
            <p id='author'>- {quote.author}</p>
            <br />
            <a href='https://twitter.com/intent/tweet' id='tweet-quote' target="_blank">
                <button type='button' className='btnTweet'>
                    <i className="bi bi-twitter" />
                    Tweet
                </button>
            </a>
            <button 
                type='button' 
                className='btnNewQuote' 
                id='new-quote'
                onClick={handleNewQuote}
            >
                <i className="bi bi-shuffle" />
                Otra frase
            </button>

        </div>
    )
}

export default QuoteBox