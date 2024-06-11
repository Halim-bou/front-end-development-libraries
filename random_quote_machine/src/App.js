import React, { Component } from 'react';
import './App.css';
import QuotesGenrator from './components/Quotes';
// import { Grid } from 'react-bootstrap';

/**
 * Create Reacte Parent Component class for Random Quote Machine.
 * quotes are a list of Random quotes objects feched from API {quote: '', author: ''}
 * quoteIndex is a Random index generate to display random quote from quotes
 */

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: [],
      quoteIndex: null,
    }
    this.setQuoteIndex = this.setQuoteIndex.bind(this);
    this.quoteIndexMethod = this.quoteIndexMethod.bind(this);
  }

  /**
   * fetch Random Quotes from API and parse them to quots props
   */
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.setQuoteIndex))
  }

  /**
   * set new index returned from quoteIndexMethod() the state quote index
   */
  setQuoteIndex() {
    this.setState({ quoteIndex: this.quoteIndexMethod() })
  }

  //this a method that generate random index from 0 to the length of quotes fetched.
  quoteIndexMethod() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return Math.floor(Math.random() * this.state.quotes.length);
  }

  // Get method to select a random Quote from quotes list fetched
  get quoteSelected() {
    if(!this.state.quotes.length) {
      return undefined;
    }
    return this.state.quotes[this.state.quoteIndex];
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div id="quote-box">
        {this.quoteSelected ? <QuotesGenrator quoteSelected={this.quoteSelected} setQuoteIndex={this.setQuoteIndex} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
