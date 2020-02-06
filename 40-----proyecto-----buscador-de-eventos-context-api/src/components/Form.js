import React, { Component} from 'react';

class Form extends Component {
  state = {  }
  render() { 
    return (
      <form className="container__form">
        <input type="text" className="form__input" placeholder="evento" />      
        <select className="form__select">
          <option >
            Selecciona una categoria
          </option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <button className="button button__primary">Buscar</button>
      </form>
    );
  }
}
 
export default Form;