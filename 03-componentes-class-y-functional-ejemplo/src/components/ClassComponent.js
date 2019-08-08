import React, { Component } from 'react';
import './App.css'

class ClassComponent extends Component {
    render() {
        return (
            <div className="App-header">
                <h2>
                    I am a Class Component
                <span role="img" aria-label="smile"> 😃 </span>
                </h2> 
            </div>
        )
    }
}

export default ClassComponent;