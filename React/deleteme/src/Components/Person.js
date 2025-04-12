import React, { Component } from 'react'


class Person extends Component{
    constructor(props){
        super(props);
        this.state = {};       
        this.btnHandler = this.btnHandler.bind(this)
    };

     //    handler
     btnHandler(){
        this.setState({name : 'Rollex', rollNo : "1"});
    };

   

    
    render(){
        return(
            <div className='Container' style={{border:"2px solid black", width: "40%" , margin : "10px"}} onClick={this.props.remove}>
                <h1>My name is {this.props.name}</h1>
                <h3>Roll No: {this.props.rollNo} </h3>
                {/* <button onClick={this.btnHandler}>Change Data</button> */}
                <br/>
                <br/>
            </div>
        )
    };
};


export default Person;


