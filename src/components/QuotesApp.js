import React from 'react';
import Author from './Author';
import Quote from './Quote';
import GetQuote from './GetQuote';
import TweetQuote from './TweetQuote';
import Footer from './Footer';
import callQuotesAPI from '../util/QuotesAPI';

const MainDisplay = {
  width: '100%',
  minHeight: '75vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const ButtonRow = {
  boxSizing: "border-box",
  margin: '0 auto',
  display: 'flex'
}

class QuotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.handleGetNewQuote = this.handleGetNewQuote.bind(this);
    this.handleTweetQuote = this.handleTweetQuote.bind(this);
    this.state = {
      authorFirstName: '',
      authorLastName: '',
      quote: ''
    }
  }

  async getRandomQuote() {
    const data = await callQuotesAPI();
    if (data) {
      this.setState(() => ({
        authorFirstName: data.authorFirstName,
        authorLastName: data.authorLastName,
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
      <div style={MainDisplay}>
        <Author authorFirstName={this.state.authorFirstName} authorLastName={this.state.authorLastName} />
        <Quote quote={this.state.quote} />
        <div style={ButtonRow}>
          <GetQuote handleGetNewQuote={this.handleGetNewQuote} />
          <TweetQuote handleTweetQuote={this.handleTweetQuote} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default QuotesApp;
