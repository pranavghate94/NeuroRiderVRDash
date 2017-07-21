import * as Konva from 'konva';
import React from 'react';
import { render } from 'react-dom';
import { Layer, Rect, Stage, Group, Circle } from 'react-konva';

class MyRect extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color : 'green'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            color : Konva.Util.getRandomColor()
        });
    }

    render(){
        return(<Rect
            x={10} y={10} width={50} height={50}
            fill={this.state.color}
            shadowBlur = {10}
            onClick = {this.handleClick}
        />);
    }
}

function KonvaApp(){
    return(
        <Stage width={700} height={700}>
            <Layer>
                <MyRect/>
            </Layer>
        </Stage>
    );
}

export function KonvaTest(){
    return(
        <Circle
            fill = {Konva.Util.getRandomColor()}
            x = {100}
            y = {100}
            width = {50}
            height = {50}
        />
    );
}

export default KonvaApp;
