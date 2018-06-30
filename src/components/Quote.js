import React from 'react';

const QuoteDisplayBox = {
  display: 'block',
  maxWidth: '85%',
  maxHeight: '90vh',
  width: "400px",
  backgroundColor: "#fff",
  minHeight: "200px",
  boxSizing: "border-box"
}

const Quote = props => (
  <div style={QuoteDisplayBox}>
    <p>{props.quote}</p>
  </div>
);

export default Quote;