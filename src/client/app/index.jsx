import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
//import KonvaApp from './Konva.jsx';
import Minimap from './Minimap.jsx';
import Son from './Son.jsx';

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

//Test.testfn();
//render(<App/>, document.getElementById('app'));
//render(<Socket/>, document.getElementById('sock'));

render(<Minimap/>, document.getElementById('app'));
