import { Component } from "react";
//import { Counter } from "./Counter/Counter";
import { Article } from "./HTTP/Article";
import { SourceBar } from "./HTTP/SourceBar";
import "./HTTP/query.css";

export default class App_2 extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     counterNo: 0,
  //   };
  //   console.log("App constructor");
  // }

  // addCounter = () => {
  //   this.setState({ counterNo: this.state.counterNo + 1 });
  // };
  handleSource = (query) => {
    console.log(query);
  };
  render() {
    return (
      <div className="query">
        {/* {new Array(this.state.counterNo).fill().map((ele, index) => (
          <Counter name={`counter ${index}`} key={index} />
        ))}
        <br />
        <button onClick={this.addCounter}>Add counter</button> */}
        <SourceBar handleSource={this.handleSource} />
        <Article />
      </div>
    );
  }
  // componentDidMount() {
  //   console.log("App componentDidMount");
  // }

  // componentDidUpdate() {
  //   console.log("App componentDidUpdate");
  // }
  // componentWillUnmount() {
  //   console.log("App componentWillUnmount");
  // }
}
