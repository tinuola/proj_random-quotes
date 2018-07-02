import React from 'react';

const AuthorDisplay = {
  margin: '0 auto'
}
const AuthorName = {
  fontSize: '15vw',
  fontWeight: '900',
  color: 'gray',
  margin: '0',
  opacity: '0.2'
}


const Author = props => (
  <div style={AuthorDisplay}>
    <p style={AuthorName}>{props.authorName}</p>
  </div>
);

export default Author;