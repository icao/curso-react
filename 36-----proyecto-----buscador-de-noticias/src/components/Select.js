import React, {Component} from 'react';
import '../styles/Select.css'

class Select extends Component{
  state = {
    value: "coconut" 
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      value
    }, () => {
        const { value } = this.state;
        this.props.searchNews(value);
    })
  }

  render() {
  return (
    <div className="input-field col s12">
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="general">General</option>
        <option value="business">Negocios</option>
        <option value="entertainment">Entretenimiento</option>
        <option value="health">Salud</option>
        <option value="science">Ciencia</option>
        <option value="sports">Deportes</option>
        <option value="technology">Tecnología</option>
      </select>
    </div>
  );
}
}
 
export default Select;