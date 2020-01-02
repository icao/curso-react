import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import PropTypes from 'prop-types'

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

ListNews.propTypes = {
  news: PropTypes.array.isRequired
}

export default ListNews;
