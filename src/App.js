import React, { Component } from 'react';
import 'meteor-client';
// import 'meteor-client-es5';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { MyCollection } from './collections';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { documents } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          {documents.map(({
            _id, value
          }) => (
            <div key={_id}>{value}</div>
          ))}

      </div>
    );
  }
}

export default withTracker(() => {
  const subscription = Meteor.subscribe('my_collection');
  return {
    documents: MyCollection.find().fetch(),
  };
})(App);