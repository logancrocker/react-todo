import React, { Fragment } from 'react';
import TodoItem from './TodoItem';
import { Grid, Typography, Button} from '@material-ui/core';
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
    console.log("Delete item at index " + id);
    var newState = this.state;
    newState.items.splice(id, 1);
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
          <Grid item
                xs={8}>
            {this.state.items}
          </Grid>
          <Grid item
                xs={8}>
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