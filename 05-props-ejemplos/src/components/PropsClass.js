import React, { Component } from "react";

class PropsClass extends Component {
  render() {
    console.log(this.props);
    let existencia = this.props.boleano ? "Existe" : "No Existe";
    let existenciaOtro = this.props.boleanoOtro ? "Verdadero" : "Falso";

    return (
      <div className="Container-class">
        <section className="Section-props">
          <h1>Class Component</h1>
          <ul>
            <li>Cadena: {this.props.cadena}</li>
            <li>
              <strong>Cadena: {this.props.cadenaOtro}</strong>
            </li>
            <li>Número: {this.props.numero}</li>
            <li>
              <strong>Número: {this.props.numeroOtro}</strong>
            </li>
            <li>Arreglo: {this.props.arreglo.join(", ")}</li>
            <li>
              <strong>Arreglo: {this.props.arregloOtro.join(",  ")}</strong>
            </li>
            <li>Objeto Tarea: {this.props.objeto.tarea}</li>
            <li>Objeto Prioridad: {this.props.objeto.prioridad}</li>
            <li>Objeto Categoría: {this.props.objeto.categoria}</li>
            <li>
              <strong>Objeto Tarea: {this.props.objetoOtro.key}</strong>
            </li>
            <li>Booleano: {existencia}</li>
            <li>
              <strong>Booleano: {existenciaOtro}</strong>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default PropsClass;

/** 
 * En un Class Component
 * A diferencia del Funcitonal Component,
 * las propiedades van a estar haciendo referencia a 'this', por lo cual
 * para acceder a ellas tenemos que hacer referencia al this seguido de la propiedad a usar.
 * 
 * De igual forma this.props es un objeto con la coleccion de atributos enviados desde 
 * la instancia del componente.
 * 
 * Cuando usamos un Class Component no es necesario pasar como parametro nada.
 * Adicionalmente SIEMPRE tenemos que hacer referencia a las propiedades con la 
 * palabra "props".
 * No podemos renombrar ya que esta asi porque extiende de la clase Components.
*/