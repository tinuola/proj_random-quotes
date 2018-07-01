import React from 'react';
import Author from './Author';
import Quote from './Quote';
import GetQuote from './GetQuote';
import callQuotesAPI from '../util/QuotesAPI';
import '../styles/style.css';

const MainDisplay = {
  display: 'flex',
  flexDirection: 'row'
}

class QuotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.handleGetNewQuote = this.handleGetNewQuote.bind(this);
    this.handleTweetQuote = this.handleTweetQuote.bind(this);
    this.state = {
      author: '',
      quote: ''
    }
  }

  async getRandomQuote() {
    const data = await callQuotesAPI();
    if (data) {
      this.setState(() => ({
        author: data.author,
        quote: data.quote
      }));
    }
  }

  componentWillMount() {
    this.getRandomQuote();
  }

  handleGetNewQuote() {
    this.getRandomQuote();
  }

  handleTweetQuote() {
    let quote = this.state.quote;
    window.open(`http://twitter.com/home?status=${quote} @freecodecamp`);
  }

  render() {
    return (
      <div style={MainDisplay} className='app'>
        <Author authorName={this.state.author} />
        <Quote quote={this.state.quote} />
        <GetQuote handleGetNewQuote={this.handleGetNewQuote} handleTweetQuote={this.handleTweetQuote} />
      </div>
    )
  }
}

export default QuotesApp;
