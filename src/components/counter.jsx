import React, { Component } from "react";
class Counter extends Component {
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  // un-revised code for constructor
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <div>
        {this.props.children}{" "}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}{" "}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btm-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;