import React from 'react';

const QuoteDisplayBox = {
  boxSizing: "border-box",
  background: '#e6e6e6',
  margin: '0 auto 25px auto',
  width: '500px',
  maxWidth: '100%',
  minHeight: '200px'
}

const QuoteText = {
  fontSize: '1.5em'
}

const Quote = props => (
  <div style={QuoteDisplayBox}>
    <p style={QuoteText}>{props.quote}</p>
  </div>
);

export default Quote;