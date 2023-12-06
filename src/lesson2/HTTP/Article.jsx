import { Component } from "react";
import PropTypes from "prop-types";
import css from "./query.module.css";

export class Article extends Component {
  render() {
    const data = this.props.data;
    const articles = data.map((article) => (
      <div className={css.article} key={article.id}>
        <a className={css.link} href={article.url}>
          <div>
            <span style={{ fontWeight: "bold" }}>Author: </span>
            {article.author}
          </div>
          <div>
            <span style={{ fontWeight: "bold" }}>Title: </span>
            {article.title}
          </div>
        </a>
      </div>
    ));
    return <>{articles}</>;
  }
}

Article.propTypes = {
  data: PropTypes.string,
};
