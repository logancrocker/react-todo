import React, { Fragment } from 'react';
import TodoItem from './TodoItem';
import { Grid, Typography, Button } from '@material-ui/core';
import uuid from 'uuid';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      uniqueId: 0,
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd() {
    var newState = this.state;
    var id = this.state.items.length;
    console.log("This item is at index " + id);
    newState.items.push(<TodoItem key={ uuid.v4() }
                                  id={ uuid.v4() } 
                                  edit
                                  handleDelete={ this.handleDelete } />);
    this.setState(newState);  
  }

  handleDelete(id) {
    console.log("Delete item with id " + id);
    var newState = this.state;
    var newItems = newState.items.filter((obj) => {
      return obj.props.id !== id;
    });
    newState.items = newItems;
    this.setState(newState);
  }

  render() {

    return(
      <Fragment>
        <Grid container
              direction="column"
              spacing={24}>
          <Grid item>
            <Typography variant="h1">
              Todo List
            </Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Typography variant="h4"
                            style={ { marginLeft: '50px' } }>
                  { "By Logan Crocker" }
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item
                xs={12}>
            {this.state.items}
          </Grid>
          <Grid item
                xs={12}>
            <Button fullWidth
                    variant="outlined"
                    onClick={ () => { this.handleAdd() } }>
              Add task
            </Button>
          </Grid>
        </Grid>
      </Fragment>
    );
  }

}

export default TodoList;