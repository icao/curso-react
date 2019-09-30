import React, { Component } from 'react';

class Article extends Component{
  

  render() {
    const { title, author, date } = this.props;
    return (
      <section className="App-container-component-2">
        <h2>{title}</h2>
        <h4>Autor: {author}</h4>
        <p>{date}</p>
        <p>{this.props.children}</p>
      </section>
    );
  }
}

export default Article;