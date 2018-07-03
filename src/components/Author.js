import React from 'react';

const AuthorDisplay = {
  margin: '0 auto'
}

const AuthorFirstName = {
  fontSize: '15vw',
  fontWeight: '900',
  color: '#e6e6e6',
  margin: '0',
}

const AuthorLastName = {
  fontWeight: '300',
  fontSize: '1.5rem',
  color: '#333333',
  margin: '0'
}

const Author = props => (
  <div style={AuthorDisplay}>
    <p style={AuthorFirstName}>{props.authorFirstName}<span style={AuthorLastName}>{props.authorLastName}</span>
    </p>
  </div>
);

export default Author;