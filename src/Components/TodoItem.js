import React from 'react';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox'

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      raised: false,
      edit: props.edit,
      text: '',
    }
  };

  handleCheck() {
    // toggle checked boolean
    var newState = this.state;
    newState.checked = !newState.checked;
    this.setState(newState);
  };

  handleHover() {
    var newState = this.state;
    newState.raised = !newState.raised;
    this.setState(newState);
  };

  handleEdit() {
    var newState = this.state;
    newState.edit = !newState.edit;
    this.setState(newState);
  };

  handleTextChange(event) {
    var newState = this.state;
    newState.text  = event.target.value;
    this.setState(newState);
  };

  renderTextField() {
    return (
      <TextField fullWidth
                 disabled={ !this.state.edit }
                 variant="outlined"
                 autoFocus={ this.state.edit }
                 placeholder="Enter a task"
                 onChange={ (event) => { this.handleTextChange(event) } }
                 value={ this.state.text }>
        { this.state.text }
      </TextField>
    );
  };

  renderPlainText() {
    return (
      <Typography variant="h5">{ this.state.text }</Typography>
    );
  };

  render() {

    return (
      <Card raised={ this.state.raised }
            onMouseEnter={ () => { this.handleHover() } }
            onMouseLeave={ () => { this.handleHover() } }
            style={ this.state.checked ? { border: '2px solid green' } : {} }>
        <CardContent>
          <Grid container
                direction="row"
                alignItems="center"
                justify="center"
                spacing={24}>
            <Grid item
                  xs={1}>
              <Checkbox checked={ this.state.checked }
                        onChange={ () => { this.handleCheck() } } 
                        disabled={ this.state.edit } />
            </Grid>
            <Grid item
                  xs={8}>  
                  { this.state.edit ? this.renderTextField() : this.renderPlainText() }
            </Grid>  
            <Grid item
                  xs={1}>
              <Button onClick={ () => { this.handleEdit() } }>{ this.state.edit ? "Ok" : "Edit" }</Button>
            </Grid> 
            <Grid item
                  xs={1}>
              <Button onClick={ () => this.props.handleDelete(this.props.id) }>Delete</Button>
            </Grid>        
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default TodoItem;