import React from 'react';

const AuthorDisplay = {
  writingMode: 'vertical-lr',
  transform: 'rotate(180deg)',
  fontSize: '3.8vw',
  margin: '0'
}


const Author = props => (
  <div style={AuthorDisplay}>
    <p>{props.authorName}</p>
  </div>
);

export default Author;