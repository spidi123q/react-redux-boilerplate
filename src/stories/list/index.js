import React, { Component } from 'react';

import './list.scss';

import ListFormContainer from '../../containers/listFormContainer/index';

export default class ListStory extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <ListFormContainer index={this.props.match.params}/>
      </div>
    );
  }
}
