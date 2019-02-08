import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import './form.scss';
import { Button, TextField, GridListTile, Select, MenuItem, Input } from '@material-ui/core';
import { handleChange, add, handleSubmit } from './action';
import { Redirect } from 'react-router'

class FormContainer extends Component {

  render() {

    return (
      <Grid container item xs={12} justify="center">
        <form onSubmit={this.props.handleSubmit}>
          <Grid container item xs={6}>
            <TextField required className="hash-input" name="formName" 
              onChange={event => this.props.handleChange(event, 0)} label="Form name"></TextField>
          </Grid>
          {
            this.props.form.map((item, index) =>           
            <Grid key={index} container item xs={12}>
              <Grid container item xs={6}>
                <TextField required className="hash-input" name="fieldName" 
                onChange={event => this.props.handleChange(event, index)} label="Field name"></TextField>
              </Grid>
              <Grid container item xs={6}>
                <Select required
                value={item.fieldType}
                onChange={event => this.props.handleChange(event, index)}
                input={<Input name="fieldType" id="age-helper" />}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="String">String</MenuItem>
                <MenuItem value="Number">Number</MenuItem>
                <MenuItem value="Checkbox">Checkbox</MenuItem>
                <MenuItem value="Date">Date</MenuItem>
                <MenuItem value="Email">Email</MenuItem>
              </Select>
              </Grid>
            </Grid>)
          }
          <Grid container item xs={12} justify="center">
            <Button onClick={this.props.add} variant="contained" color="primary">Add</Button>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </Grid>
        </form>
        {
          this.props.isSubmitted && <Redirect to="/list"/>
        }
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
    ...state.formReducer
});
const mapDispatchToProps = dispatch => ({
  handleChange: (event, index) => dispatch(handleChange(event, index)),
  add: () => dispatch(add()),
  handleSubmit: (event) => dispatch(handleSubmit(event)),
})
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
