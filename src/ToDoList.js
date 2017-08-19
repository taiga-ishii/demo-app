import React from 'react';
import ToDo from './ToDo';
import AddDo from './AddDo';

class ToDoList extends React.Component{
    constructor(props){
      super(props);
      this.state = { dos: ['sample'] };
      this.addDo = this.addDo.bind(this);
    }

    addDo(newName) {
      this.setState({ dos: [...this.state.dos, newName] });
    }

    renderToDos() {
      return this.state.dos.map(name => (
        <ToDo key={name} name={name}/>
      ));
    }

    addToDos(newToDo) {
      this.setState({ ToDos: [...this.state.todos, newToDo] });
    }
  render() {
    return (
      <div className="ToDoList">
        <AddDo addDo={this.addDo}/>
        {this.renderToDos()}
        {/*}<ToDo name="1"/>
        <ToDo name="2"/>*/}
      </div>
    );
  }
}
export default ToDoList;
