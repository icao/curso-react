import React from "react";
import logo from "./logo.svg";
import imageDestructuring from "./image_component.jpeg";
import imageUser from "./user_image.jpg";
import "./App.css";
import RightComponent from "./components/RightComponent";
import LeftComponent from "./components/LeftComponent";
import TopComponent from "./components/TopComponent";

function App() {
  const user = {
    gender: "male",
    name: {
      title: "mr",
      first: "elliot",
      last: "margaret"
    },
    location: {
      street: "5243 park rd",
      city: "delta",
      state: "texas",
      postcode: "M2J 9O1",
      coordinates: {
        latitude: "-66.3339",
        longitude: "-175.1508"
      }
    },
    email: "elliot.margaret@example.com",
    login: {
      uuid: "4a48a455-e59d-48a5-8977-3c528a57c9d3",
      username: "lazykoala322",
      password: "mike123"
    },
    phone: "563-475-8219",
    cell: "578-256-7140",
    picture: {
      large: imageUser
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <TopComponent
          number={3}
          title="Component - Destructuring Props"
          urlImage={imageDestructuring}
        />
      </section>
      <section className="App-components">
        <LeftComponent
          titleSection="Class Component - Destructuring Props"
          email={user.email}
          userName={user.name}
          location={user.location}
          phone={user.phone}
          photo={user.picture}
        />
        <RightComponent
          titleSection="Functional component - Destructuring Props"
          email={user.email}
          userName={user.name}
          location={user.location}
          phone={user.phone}
          photo={user.picture}
        />
      </section>
    </div>
  );
}

export default App;
