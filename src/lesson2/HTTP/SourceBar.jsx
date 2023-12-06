import { Component } from "react";
import { PropTypes } from "prop-types";
import css from "./query.module.css";

export class SourceBar extends Component {
  handleKeyUp = (event) => {
    if (event.code === "Enter") {
      this.props.handleSource(event.target.value);
    }
  };
  render() {
    return (
      <divc className={css.query}>
        <input placeholder="Enter query here" onKeyUp={this.handleKeyUp} />
      </divc>
    );
  }
}

SourceBar.propTypes = {
  handleSource: PropTypes.func.isRequired,
};
