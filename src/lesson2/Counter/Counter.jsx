import { Component } from "react";
import { PropTypes } from "prop-types";

export class Counter extends Component {
  constructor({ name }) {
    super();
    this.state = {
      currValue: 0,
    };
    this.adding = () => {
      this.setState({ currValue: this.state.currValue + 1 });
    };
    console.log("Counter Constructor", name);
  }
  render() {
    console.log("Counter render", this.props.name);
    return (
      <>
        <div>{this.state.currValue}</div>
        <div>{this.props.name}</div>
        <button onClick={this.adding}>+</button>
      </>
    );
  }
  componentDidMount() {
    console.log("Counter componentDidMount", this.props.name);
  }

  componentDidUpdate() {
    console.log("Counter componentDidUpdate", this.props.name);
  }

  componentWillUnmount() {
    console.log("Counter componentWillUnmount", this.props.name);
  }
}

Counter.propTypes = {
  name: PropTypes.string,
};
