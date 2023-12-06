import { Component } from "react";
//import { Counter } from "./Counter/Counter";
import { Article } from "./HTTP/Article";
import { SourceBar } from "./HTTP/SourceBar";
import getAllItems from "./HTTP/servises";

export default class App_2 extends Component {
  state = {
    articles: [],
    isLoading: false,
  };
  handleSource = async (query) => {
    try {
      this.setState({ isLoading: true, articles: [] });
      const articles = await getAllItems(query);
      this.setState({ articles: articles });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  render() {
    return (
      <div>
        <SourceBar handleSource={this.handleSource} />
        {this.state.isLoading === true && <h3>Loading... Please wait :)</h3>}
        <Article data={this.state.articles} />
      </div>
    );
  }
}
