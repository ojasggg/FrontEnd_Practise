import React,{ Component } from 'react';




class Logo extends Component{
    state = {
        username : "",
        address : "",
        phoneNumber : "",
        age : ""
    }
    myFunction=()=>{
        this.setState({
            username : "Ojash",
            address : "kathmandu",
            phoneNumber : "988888888",
            age : "20"
        })
    }
    render(){
        return(
            <div>
                <p>Welcome {this.state.username} from {this.state.address}</p>
                <p>My phone number is {this.state.phoneNumber}</p>
                <p>Your Age is {this.state.age}</p>
                <input type = "text" value={this.state.username} 
                onChange={(event)=>{this.setState({username : event.target.value})}}/>

                <input type = "text" value={this.state.address} 
                onChange={(event)=>{this.setState({address : event.target.value})}}/>

                <input type = "text" value={this.state.phoneNumber} 
                onChange={(event)=>{this.setState({phoneNumber : event.target.value})}}/>       


                <button onClick={this.myFunction}>Submit</button>
            </div>
        )
    }
}

export default Logo