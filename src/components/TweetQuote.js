import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

const icons = {
  color: '#6f6f6f',
  marginRight: '25px',
  border: '2px solid #6f6f6f',
  borderRadius: '35px',
  padding: '20',
  cursor: 'pointer'
}

class TweetQuote extends React.Component {
  constructor(props) {
    super(props);
    this.toggleHover = this.toggleHover.bind(this);
    this.state = { hover: false }
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    let hoverStyle;
    if (this.state.hover) {
      hoverStyle = {
        background: '#e6e6e6',
        border: '2px solid #e6e6e6'
      }
    }

    return (
      <div>
        <FontAwesomeIcon icon={['fab', 'twitter']}
          size="1x"
          onClick={this.props.handleTweetQuote}
          style={{ ...icons, ...hoverStyle }}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
        />
      </div>
    )
  }

}

export default TweetQuote;
