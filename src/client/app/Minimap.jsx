import React from 'react';
import ReactDOM from 'react-dom';
import Konva from 'konva';
import { Layer, Stage, Image, Rect, Line } from 'react-konva';
import io from 'socket.io-client';

//Socket
let socket = io('http://localhost:8080');

class Minimap extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            image : null,
            playerPositionX : null,
            playerPositionY : null,
            locationPoints : []
        }
    }

    componentDidMount(){

        const image = new window.Image();
        image.src = "./sprites/grass.png"
        image.onload = () =>{
            this.setState({
                image: image
            });
        }

        //Set Grassy Background
        var minimapRect = this.refs.minimapRect;
        minimapRect.fillPatternImage(image);
        minimapRect.fillPatternRepeat('repeat');

        socket.on('node::player_update',(incomingData)=>{
            //console.log(incomingData.playerPositionX + "," + incomingData.playerPositionY);
            //console.log()
            this.setState({
                playerPositionX : incomingData.x,
                playerPositionY : incomingData.z,
                locationPoints : this.state.locationPoints.concat([incomingData.x, incomingData.z])
            });
            
            
        });
    }

    render(){
        return(
            <Stage ref="minimapStage"
            width = {700}
            height = {700}
            >
                <Layer ref="minimapLayer">
                    
                    <Rect
                        ref="mapstage"
                        x = {10}
                        y = {10}
                        width = {500}
                        height = {500}
                        fill = "green"
                    >

                    </Rect>
                    <Rect
                        ref="minimapRect"
                        x={this.state.playerPositionX}
                        y={this.state.playerPositionY}
                        width = {10}
                        height = {10}
                        fill = "white"
                    >

                    </Rect>
                </Layer>
                <Layer>
                    <Line
                        stroke = "yellow"
                        strokeWidth = {3}
                        lineCap = "round"
                        lineJoin = "round"
                        points = {this.state.locationPoints}
                    >
                    </Line>
                </Layer>
            </Stage>
            
        );
    }

}

export default Minimap;