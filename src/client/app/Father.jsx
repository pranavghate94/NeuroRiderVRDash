import React from 'react';
import Grandfather from './Gradfather.jsx';

class Father extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Grandfather>
            </Grandfather>
        );
    }
}

export default Father;