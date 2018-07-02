import React from 'react';

const ButtonRow = {
  margin: '0 auto'
}

const GetQuote = props => (
  <div style={ButtonRow}>
    <button onClick={props.handleGetNewQuote}>Get a Quote</button>
    <button onClick={props.handleTweetQuote}>Tweet a Quote</button>
  </div>
)

export default GetQuote;