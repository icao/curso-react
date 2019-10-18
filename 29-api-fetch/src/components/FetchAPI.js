import React, { Component } from "react";

class FetchAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bitcoinPriceIndex: {}
    };
  }

  componentDidMount() {
    console.log("Ejecutando componentDidMount");
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => response.json())
      .then(data => {
        const { bpi } = data;
        console.log("Respuesta del servidor: ", JSON.stringify(bpi));
        this.setState(() => {
          return {
            bitcoinPriceIndex: bpi
          };
        });
      });
  }

  renderCurrencies() {
    const { bitcoinPriceIndex } = this.state;
    // Método accediendo a las keys y luego iterando con map y accediendo con [] al objeto
    /*
    console.warn(JSON.stringify(Object.keys(bitcoinPriceIndex)));
    return Object.keys(bitcoinPriceIndex) //Convertimos el objeto en array para poder iterar
      .map(currency => {
        console.log(currency);
        return (
          <div key={currency}>
            1 BIT son {bitcoinPriceIndex[currency].rate}
            <span> {currency}</span>
          </div>
        );
      });
      */
    // Método que se me hace mejor gracias a que las monedas son objetos nombrados
    // igual a una propiedad, las keys (USD, GBP, EUR) se llaman igual a la propiedad Code
    // aprovechamos esa ventaja
    
    console.warn(JSON.stringify(Object.values(bitcoinPriceIndex)));
    return Object.values(bitcoinPriceIndex).map(currency => {
      return (
        <div key={currency.code}>
          1 Bitcoin equivale a {currency.rate}
          <span> {currency.code}</span>
        </div>
      );
    });
  }

  render() {
    console.log("Render ready");
    return (
      <section className="App-container-component">
        <h2>consuminedo servicio de bitcoin</h2>
        {/* En uncaso real, no se renderizarian listas de esta manera, solo lo usamos para el ejemplo  */}
        <section>{this.renderCurrencies()}</section>
        {/* La mejor forma es hacer otro componente y pasarle los datos como props y aplicar el metodo map a la instancia del componente stateless(encargado de renderear el item)*/}
      </section>
    );
  }
}

export default FetchAPI;
