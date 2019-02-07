import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import './form.scss';
import { Button, TextField, GridListTile, Select, MenuItem, Input } from '@material-ui/core';
import { handleChange, add } from './action';

class FormContainer extends Component {

  render() {

    return (
      <Grid container item xs={12} justify="center">
        <form>
          {
            this.props.form.map((item, index) =>           
            <Grid key={index} container item xs={12}>
              <Grid container item xs={6}>
                <TextField className="hash-input" name="fieldName" 
                onChange={event => this.props.handleChange(event, index)} label="Field name"></TextField>
              </Grid>
              <Grid container item xs={6}>
                <Select
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
            <Button variant="contained" color="primary">Submit</Button>
          </Grid>
        </form>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
    ...state.formReducer
});
const mapDispatchToProps = dispatch => ({
  handleChange: (event, index) => dispatch(handleChange(event, index)),
  add: () => dispatch(add())
})
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);