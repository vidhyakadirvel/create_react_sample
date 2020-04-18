import React, {Component} from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Washing the dishes',
        isCompleted: false,
      },
      {
        id: 2,
        title: 'Getting up early',
        isCompleted: true,
      },
      {
        id: 3,
        title: 'Listen to motivationals',
        isCompleted: false,
      }
  ]
  }

  //Toggle the checkbox ;if ticked already,it can be changed to not ticked.
  markComplete = (id) =>
  {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.isCompleted = !todo.isCompleted
      }
      return todo;
    }) });
  } 

  //delete todo.items shud be deleted when X is clicked;we use filter method here
  delTodo = (id) =>
  {
this.setState({todos:[...this.state.todos.filter(todo => todo.id!== id)]});
  }//... spread operator

  render(){
      return (
        //// i like to pass state frm app.js to Todos component as props
    <div className="App">
    < Header />
     <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> 
    </div>
  );
}
}

export default App;
