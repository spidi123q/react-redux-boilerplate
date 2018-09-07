import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import './App.scss';
import { simpleAction, addNotebook,testApi } from './action'
import PropTypes from 'prop-types';

class App extends Component {

  simpleAction = (event) => {
    console.log(this.props);
/*     this.props.testApi().then(resp => {
      console.log(resp);
    }).catch(err => {
      console.log(err);
    }) */
    this.props.addNotebook();
   }
  render() {
    const listItems = this.props.notebooks.map((number, i) =>
      <li key={i}>{number}</li>
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React hi
          <div className="test">
            hi
          </div>
          </h1>
        </header>
        <button onClick={this.simpleAction}>click</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {listItems}
        </p>
      </div>
    );
  }
}

App.propTypes = {
  simpleAction: PropTypes.any.isRequired,
};

const mapStateToProps = state => ({
  ...state.simpleReducer
 });
 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  testApi: () => dispatch(testApi()),
  addNotebook: () => dispatch(addNotebook())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
