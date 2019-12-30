import React, { Component } from "react";
import ArticleCard from "./ArticleCard";

class ListNews extends Component {
 
  render() {
    const { news } = this.props;
    return (
      <div className="grid">
        {news.map(article => {
          return (
            <div className="item" key={article.url}>
              <ArticleCard article={article} resize={this.resize} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListNews;
