import React from 'react';
import Author from './Author';
import GetQuote from './GetQuote';
import Quote from './Quote';
import callQuotesAPI from '../util/QuotesAPI';
import '../styles/style.css';

const MainDisplay = {
  display: 'flex',
  flexDirection: 'row'
}

class QuotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleGetQuote = this.handleGetQuote.bind(this);
    this.handleTweetQuote = this.handleTweetQuote.bind(this);
    this.state = {
      author: '',
      quote: ''
    }
  }

  async componentWillMount() {
    try {
      const obj = callQuotesAPI();
      const data = await obj;
      if (data) {
        this.setState(() => ({
          author: data.author,
          quote: data.quote
        }));
      }
    } catch (e) { }
  }

  async handleGetQuote() {
    const data = await callQuotesAPI();
    if (data) {
      this.setState(() => ({
        author: data.author,
        quote: data.quote
      }));
    }
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
        <GetQuote handleGetQuote={this.handleGetQuote} handleTweetQuote={this.handleTweetQuote} />
      </div>
    )
  }
}

export default QuotesApp;
