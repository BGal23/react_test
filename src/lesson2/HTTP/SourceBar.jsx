import { Component } from "react";
import { PropTypes } from "prop-types";

export class SourceBar extends Component {
  handleKeyUp = (event) => {
    if (event.code === "Enter") {
      this.props.handleSource(event.target.value);
    }
  };
  render() {
    return (
      <div>
        <input placeholder="Enter query here" onKeyUp={this.handleKeyUp} />
      </div>
    );
  }
}

SourceBar.propTypes = {
  handleSource: PropTypes.func.isRequired,
};
