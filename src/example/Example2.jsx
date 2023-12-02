import PropTypes from "prop-types";
// import { v4 as uuidv4 } from "uuid";
import { Component } from "react";

export class Class2 extends Component {
  state = {
    step: 1,
    value: 0,
  };

  handleSubtract = () => {
    return this.setState({ value: this.state.value - this.state.step });
  };

  handleAdd = () => {
    return this.setState({ value: this.state.value + this.state.step });
  };

  handleStep = (event) => {
    return this.setState({ step: Number(event.target.value) });
  };

  render() {
    const { step, value } = this.state;
    return (
      <>
        <h5>{value}</h5>
        <button type="button" onClick={this.handleSubtract}>
          Click to - {step}
        </button>
        <button type="button" onClick={this.handleAdd}>
          Click to + {step}
        </button>
        <br />
        <br />
        <input min={1} type="number" onChange={this.handleStep} />
      </>
    );
  }
}

Class2.propTypes = {
  name: PropTypes.string,
  step: PropTypes.number,
  value: PropTypes.number,
  //   country: PropTypes.string,
};
