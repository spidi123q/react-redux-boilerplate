import React, { Component } from 'react';
import { connect } from 'react-redux';

import './listForm.scss';
import { Grid, Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { handleChange, handleSubmit, loadData, loadForm } from './action';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


class ListFormContainer extends Component {
  inputs = {
  }
  componentWillMount() {
    this.props.loadForm()
    this.props.loadData(this.props.index)
		console.log('TCL: ListFormContainer -> componentDidMount -> this.props.loadList()', this.props.index)
  }
  update() {
    for(let item of this.props.inputs) {
      this.inputs[item.fieldName] = ''
    }
  }
  render() {
    this.update()
    let values = Object.assign(this.inputs, this.props.form)
		console.log('TCL: ListFormContainer -> render -> values', values,this.props)
    return (
      <form onSubmit={(event) => this.props.handleSubmit(event, this.props.index)} className="labour-form">
        <Grid container item xs={12}>
          <h3>Work with us Be registered and get works as per ur choice.</h3>
        </Grid>
        <Grid container justify="center" item xs={12}>
          {
            this.props.inputs.map((item, index) => 
              <Grid key={index} container justify="flex-start">

                {item.fieldType === 'String' && <TextField className="hash-input" required type="text"
                  value={this.inputs[item.fieldName]} name={item.fieldName} onChange={this.props.handleChange} 
                  label={item.fieldName}></TextField>}

                  {item.fieldType === 'Number' && <TextField className="hash-input" required 
                  value={this.inputs[item.fieldName]} type="number" name={item.fieldName} onChange={this.props.handleChange} 
                  label={item.fieldName}></TextField>}

                  {item.fieldType === 'Date' && <TextField className="hash-input" required 
                  value={this.inputs[item.fieldName]} name={item.fieldName} onChange={this.props.handleChange} 
                  label={item.fieldName} type="date"
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                    shrink: true,
                  }}></TextField>}

                  {item.fieldType === 'Email' && <TextField className="hash-input" required 
                  value={this.inputs[item.fieldName]} name={item.fieldName} type="email" onChange={this.props.handleChange} 
                  label={item.fieldName}></TextField>}

                  {item.fieldType === 'Checkbox' && 
                          <FormControl component="fieldset">
                          <FormLabel component="legend">{item.fieldName}</FormLabel>
                          <RadioGroup
                            required
                            aria-label={item.fieldName}
                            name={item.fieldName}
                            value={this.inputs[item.fieldName]}
                            onChange={this.props.handleChange}>
                              <FormControlLabel value="Y" control={<Radio />} label="Y" />
                              <FormControlLabel value="N" control={<Radio />} label="N" />
                              <FormControlLabel value="N/A" control={<Radio />} label="N/A" />
                          </RadioGroup>
                        </FormControl>}
              </Grid>
            )
          }
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
  loadData: (index) => dispatch(loadData(index)),
  loadForm: () => dispatch(loadForm())
})
export default connect(mapStateToProps, mapDispatchToProps)(ListFormContainer);