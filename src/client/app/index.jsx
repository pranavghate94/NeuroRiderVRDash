import React from 'react';
import {render} from 'react-dom';

console.log("Hello!");

class App extends React.Component{
    render(){
        return <p>Hello!</p>;
    }
}

render(<App/>, document.getElementById('app'));