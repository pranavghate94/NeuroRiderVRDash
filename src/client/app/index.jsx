import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

console.log("Hello!");

class App extends React.Component{
    render(){
        return (
        <div>
            <p>Hello!</p>
            <AwesomeComponent/>
        </div>
        )
    }
}

render(<App/>, document.getElementById('app'));