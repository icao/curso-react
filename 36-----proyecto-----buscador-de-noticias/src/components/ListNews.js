import React from "react";

const ListNews = ({ news }) => {
  return (
    <section>
      <span>
        {news.map(article => {
          return <div key={article.url }>{article.title}</div>;
        })}
      </span>
    </section>
  );
};

export default ListNews;
