import React from 'react';
import './AddDo.css';

class AddDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { doName: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addDo = this.addDo.bind(this);
  }

  addDo() {
  this.props.addDo(this.state.doName);
  this.setState({ doName: '' });
}

  handleUpdate(event) {
    this.setState({ doName: event.target.value });
  }
  render() {
    return (
      <div className="AddDo">
        <input
        type="text"
        onChange={this.handleUpdate}
        value={this.state.doName}
        />

        &nbsp;&nbsp;
        <button
          onClick={this.addDo}>
            Add
        </button>
      </div>
    );
  }
}

export default AddDo;
