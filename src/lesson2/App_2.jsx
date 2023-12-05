import { Component } from "react";
import { Counter } from "./Counter/Counter";

export default class App_2 extends Component {
  constructor() {
    super();
    this.state = {
      counterNo: 0,
    };
    console.log("App constructor");
  }

  addCounter = () => {
    this.setState({ counterNo: this.state.counterNo + 1 });
  };

  render() {
    console.log("App render");
    return (
      <>
        {new Array(this.state.counterNo).fill().map((ele, index) => (
          <Counter name={`counter ${index}`} key={index} />
        ))}
        <br />
        <button onClick={this.addCounter}>Add counter</button>
      </>
    );
  }
  componentDidMount() {
    console.log("App componentDidMount");
  }

  componentDidUpdate() {
    console.log("App componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("App componentWillUnmount");
  }
}
