import React, { Component } from "react";

export const CategoryContext = React.createContext({
  categories: []
});

export class CategoryContextProvider extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    let categories = [
      {
        image_type: "all",
        name_value: "todo"
      },
      {
        image_type: "photo",
        name_value: "foto"
      },
      {
        image_type: "illustration",
        name_value: "ilustración"
      },
      {
        image_type: "vector",
        name_value: "vector"
      }
    ];
    this.setState({
      categories
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <CategoryContext.Provider value={categories}>
        {this.props.children}
      </CategoryContext.Provider>
    );
  }
}

export const CategoryContextConsumer = CategoryContext.Consumer;
