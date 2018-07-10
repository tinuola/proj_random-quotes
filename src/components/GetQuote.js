import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faRedo)

const ButtonRow = {
  boxSizing: "border-box",
  margin: '0 auto'
}

const icons = {
  color: '#6f6f6f',
  marginRight: '25px',
  border: '2px solid #6f6f6f',
  borderRadius: '35px',
  padding: '20',
  cursor: 'pointer'
}

const GetQuote = props => (
  <div style={ButtonRow}>
    <FontAwesomeIcon icon="redo" size="1x" onClick={props.handleGetNewQuote} style={icons} />
    <FontAwesomeIcon icon={['fab', 'twitter']} size="1x" onClick={props.handleTweetQuote} style={icons} />

  </div>
)

export default GetQuote;
