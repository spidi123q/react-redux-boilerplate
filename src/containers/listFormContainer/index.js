import React, { Component } from 'react';
import { connect } from 'react-redux';

import './listForm.scss';
import { Grid, Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { handleChange, handleSubmit, loadData } from './action';

class ListFormContainer extends Component {
  inputs = {
    name: ''
  }
  componentDidMount() {
    this.props.loadData(this.props.index)
		console.log('TCL: ListFormContainer -> componentDidMount -> this.props.loadList()', this.props.index)
  }
  render() {
    let values = Object.assign(this.inputs, this.props.form)
		console.log('TCL: ListFormContainer -> render -> values', values,this.props)
    return (
      <form onSubmit={(event) => this.props.handleSubmit(event, this.props.index)} className="labour-form">
        <Grid container item xs={12}>
          <h3>Work with us Be registered and get works as per ur choice.</h3>
        </Grid>
        <Grid container justify="center" item xs={12}>
          <Grid container justify="flex-start">
            <TextField className="hash-input" value={this.inputs.name} name="name" onChange={this.props.handleChange} label="Name"></TextField>
          </Grid>
          <Grid container justify="flex-start">
            <TextField className="hash-input" name="address" onChange={this.props.handleChange} label="Address" multiline></TextField>
          </Grid>
          <Grid container justify="flex-start">
            <TextField className="hash-input" name="cityOfWork" onChange={this.props.handleChange} label="City of work" multiline></TextField>
          </Grid>
          <Grid container justify="flex-start">
            <TextField className="hash-input" name="mobile" onChange={this.props.handleChange} label="Mobile number" multiline></TextField>
          </Grid>
          <Grid container justify="flex-start">
            <TextField className="hash-input" name="modeOfWork" onChange={this.props.handleChange} label="Mode of work" multiline></TextField>
          </Grid>
          <Grid container justify="flex-start">
            <TextField className="hash-input" name="specializedIn" onChange={this.props.handleChange} label="Specialized in" multiline></TextField>
          </Grid>
          <Grid container justify="flex-start">
            <TextField className="hash-input" name="educationalQualification" onChange={this.props.handleChange} label="Educational qualification" multiline></TextField>
          </Grid>
          <Grid container justify="flex-start">
            <TextField className="hash-input" name="payPerDay" onChange={this.props.handleChange} label="Pay per day" multiline></TextField>
          </Grid>
          <Grid container justify="flex-start">
            <TextField className="hash-input" name="workingHours" onChange={this.props.handleChange} label="Working hours" multiline></TextField>
          </Grid>
          <Grid container justify="flex-start">
            <TextField className="hash-input" name="projectAreaCompleted" onChange={this.props.handleChange} label="Projected area completed" multiline></TextField>
          </Grid>
          <Grid container justify="flex-start">
            <TextField className="hash-input" name="recentProjects" onChange={this.props.handleChange} label="Recent projects" multiline></TextField>
          </Grid>
          <Grid container justify="flex-start">
            <TextField className="hash-input" name="references" onChange={this.props.handleChange} label="References" multiline></TextField>
          </Grid>
          <Grid container justify="flex-start">
            <TextField className="hash-input" name="toolsInHand" onChange={this.props.handleChange} label="Tools in hand" multiline></TextField>
          </Grid>
          <Grid container justify="flex-start">
            <TextField className="hash-input" name="requiredToolsForWork" onChange={this.props.handleChange} label="Required tools for work" multiline></TextField>
          </Grid>
          <Grid container justify="flex-start">
            <TextField className="hash-input" name="worksOnDemandHours" onChange={this.props.handleChange} label="Work on demand hours" multiline></TextField>
          </Grid>
          <Grid container justify="flex-start">
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = state => ({
    ...state.listFormReducer
});
const mapDispatchToProps = dispatch => ({
  handleChange: (event) => dispatch(handleChange(event)),
  handleSubmit: (event, index) => dispatch(handleSubmit(event, index)),
  loadData: (index) => dispatch(loadData(index))
})
export default connect(mapStateToProps, mapDispatchToProps)(ListFormContainer);