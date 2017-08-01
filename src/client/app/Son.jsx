import React from 'react';
import Father from './Father.jsx';

class Son extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Father>
                <h1>{this.props.fromg}</h1>
            </Father>
        )
    }
}

export default Son;