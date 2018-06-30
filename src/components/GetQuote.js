import React from 'react';

const ButtonRow = {
  display: 'flex',
  flexDirection: 'column'
}

const GetQuote = props => (
  <div style={ButtonRow}>
    <button onClick={props.handleGetQuote}>Get a Quote</button>
    <button onClick={props.handleTweetQuote}>TWeet a Quote</button>
  </div>
)

export default GetQuote;