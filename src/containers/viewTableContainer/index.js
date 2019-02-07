import React, { Component } from 'react';
import { connect } from 'react-redux';

import './viewTable.scss';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import {Link } from "react-router-dom"
import { loadList } from './action';

class ViewTableContainer extends Component {

  componentDidMount() {
    this.props.loadList()
  }
  render() {
    return (
      <div>
        {
          this.props.list.map((item, index) => 
            <Card key={index}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                {index}
              </Typography>
              <Typography color="textSecondary">
                adjective
              </Typography>
              <Typography component="p">
                well meaning and kindly.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={"/list/" + index}><Button size="small">Edit</Button></Link>
            </CardActions>
          </Card>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
    ...state.viewTableReducer
});
const mapDispatchToProps = dispatch => ({
  loadList: () => dispatch(loadList())
})
export default connect(mapStateToProps, mapDispatchToProps)(ViewTableContainer);
