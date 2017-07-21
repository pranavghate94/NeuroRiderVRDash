import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import KonvaApp from './Konva.jsx';

//console.log("Hello!");

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
render(<KonvaApp/>,document.getElementById('container'));