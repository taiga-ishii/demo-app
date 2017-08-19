import React from 'react';

import './App.css';
import ToDo from './ToDo';
import ToDoList from './ToDoList';

class App extends React.Component{
  render(){
    return(
      <div className="App1">
        <ToDoList/>
        {/*<ToDo name='1'/>
        <ToDo name='2'/>
        <ToDo name='3'/>*/}
              {//Class imported from ToDo
               }
      </div>
    );
  }
}
/*
class App extends Component {
  render() {
    return (
      <div class ClassName {
        constructor() {

        }
      }Name="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/
export default App;
