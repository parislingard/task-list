import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import ListTask from './ListTask';

class Task extends Component {

  state = {
    tasks: []
  }

  componentDidMount(){
    this.getTasks();
  }

  getTasks = () => {
    axios.get('/api/tasks')
      .then(res => {
        if(res.data){
          this.setState({
            tasks: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteTask = (id) => {

    axios.delete(`/api/tasks/${id}`)
      .then(res => {
        if(res.data){
          this.getTasks()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { tasks } = this.state;

    return(
      <div>
        <h1>Task List</h1>
        <Input getTasks={this.getTasks}/>
        <ListTask tasks={tasks} deleteTask={this.deleteTask}/>
      </div>
    )
  }
}

export default Task;