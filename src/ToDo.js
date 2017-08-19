import React from 'react';
import './ToDo.css';

class ToDo extends React.Component{
  constructor(props){
    super(props);
    this.state={do:'undone'};
    this.changeDo=this.changeDo.bind(this);
    {//because cannot specify the meaning of this,maybe

    }
  }
  changeDo(){
    const newDo = this.state.do=== 'undone' ? 'done':'undone';
    this.setState({do:newDo});
  }

  render(){
    return (
      <div className="ToDo1">
      <h1>ToDo {this.props.name} {this.state.do}</h1>
           <button onClick={this.changeDo}>進捗どうですか</button>
           </div>
         );
  }
  /*doit(){
    this.setState({do:'done'});
  }*/
}

export default ToDo;
