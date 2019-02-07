import React, { Component } from 'react';
import { connect } from 'react-redux';

import './<%= camelEntityName %>.scss';

class <%= pascalEntityName %>Container extends Component {
  render() {
    return (
      <div>  <%= pascalEntityName %> </div>
    );
  }
}

const mapStateToProps = state => ({
    
});
const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(<%= pascalEntityName %>Container);
