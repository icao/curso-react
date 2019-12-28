import React from "react";
import ArticleCard from "./ArticleCard";

const ListNews = ({ news }) => {
  return (
    <div className="grid__FALSE">
      {news.map(article => {
        return <ArticleCard article={article} key={article.url} />;
      })}
    </div>
  );
};

export default ListNews;
