import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            allRooms: []
            
        }
    }
    
    componentDidMount = () => {
        this.getRooms()
    }

    input1=(event)=>{
        this.setState({inputValue1:event.target.value})
    }
    input2=(event)=>{
        this.setState({inputValue2:event.target.value})
    }
    input3=(event)=>{
        this.setState({inputValue3:event.target.value})
    }
    input4=(event)=>{
        this.setState({inputValue4:event.target.value})
    }
    input5=(event)=>{
        this.setState({inputValue5:event.target.value})
    }
    input6=(event)=>{
        this.setState({inputValue6:event.target.value})
    }
    input7=(event)=>{
        this.setState({inputValue7:event.target.value})
    }
    input8=(event)=>{
        this.setState({inputValue8:event.target.value})
    }
    input9=(event)=>{
        this.setState({inputValue9:event.target.value})
    }
    input10=(event)=>{
        this.setState({inputValue10:event.target.value})
    }

    onSearchButton=()=>{
        axios.get(process.env.REACT_APP_API_BACKEND_URL + "/rooms").then(response => {
            this.setState({outputValue:response.data})
            this.getRooms()
            console.log("response", response)
        }).catch(error => {
            console.log("error", error)
            return error;
        });
    }
    
    getRooms = () => {
        // console.log("Calling get rooms")
        axios.get(process.env.REACT_APP_API_BACKEND_URL + "/rooms").then(response => {
            this.setState({
                allRooms: response.data.rooms
            })
            console.log("response", response)
        }).catch(error => {
            console.log("error", error)
            return error;
        });
    }

    onButtonClick1=()=>{
        axios.post(
            process.env.REACT_APP_API_BACKEND_URL + "/rooms/"+(this.state.inputValue1).toString(), {
                room_id: this.state.inputValue1,
                maximum_room_occupancy:this.state.inputValue2,
                guest_email:this.state.inputValue3,
                room_status:this.state.inputValue4}).then(response => {
            this.setState({outputValue:response.data})
            
            console.log("response", response)
        }).catch(error => {
            console.log("error", error)
            return error;
        });
    }

    onButtonGet=()=>{
        axios.get(process.env.REACT_APP_API_BACKEND_URL + "/rooms/"+(this.state.inputValue5).toString()).then(response => {
            this.roomGet1()
            console.log("response", response)
        }).catch(error => {
            console.log("error", error)
            return error;
        });
    }
    
    roomGet1 = ()=>{
        axios.get(process.env.REACT_APP_API_BACKEND_URL + "/rooms/"+(this.state.inputValue5).toString()).then(response => {
            let x =[]
            x.push(response.data)
            this.setState({
                allRooms: x
            })
            console.log("response", response)
        }).catch(error => {
            console.log("error", error)
            return error;
        });
        
    }
    

    
    
    
    onButtonDelete=()=>{
        axios.delete(process.env.REACT_APP_API_BACKEND_URL + "/rooms/"+(this.state.inputValue6).toString()).then(response => {
            this.setState({outputValue:response.data})
            this.getRooms()
            console.log("response", response)
        }).catch(error => {
            console.log("error", error)
            return error;
        });
    }

    onButtonreserve=()=>{
        axios.post(process.env.REACT_APP_API_BACKEND_URL + "/rooms/"+(this.state.inputValue7).toString()+"/reserve",{guest_email:this.state.inputValue8}).then(response => {
            this.setState({outputValue:response.data})
            this.getRooms()
            console.log("response", response)
        }).catch(error => {
            console.log("error", error)
            return error;
        });
    }

    onButtonUnreserve=()=>{
        axios.post(process.env.REACT_APP_API_BACKEND_URL + "/rooms/"+(this.state.inputValue9).toString()+"/unreserve",{guest_email:this.state.inputValue10}).then(response => {
            this.setState({outputValue:response.data})
            this.getRooms()
            console.log("response", response)
        }).catch(error => {
            console.log("error", error)
            return error;
        });
    }

    reservedrooms1=()=>{
        axios.get(process.env.REACT_APP_API_BACKEND_URL + "/reservedrooms").then(response => {
            
            this.rservedRoomsmethod()
            console.log("response", response)
        }).catch(error => {
            console.log("error", error)
            return error;
        });
    }
    
    rservedRoomsmethod=()=>{
        axios.get(process.env.REACT_APP_API_BACKEND_URL + "/reservedrooms").then(response => {
            this.setState({
                allRooms:response.data.rooms})
            
            
            console.log("response", response)
        }).catch(error => {
            console.log("error", error)
            return error;
        });
    }


    




    render = () => {
        const allRooms = this.state.allRooms
        console.log(allRooms)
        const roomsTableElements = []
        for (let i = 0; i < allRooms.length; i++) {
            roomsTableElements.push(<tr>
                <td>Room ID : {allRooms[i].room_id}</td>
                <td>Maximum_room_occupancy :{allRooms[i].maximum_room_occupancy}</td>
                <td>Guest_email : {allRooms[i].guest_email}</td>
                <td>Room_status : {allRooms[i].room_status}</td> <br/><br/>
            </tr>)
        }
        return (
            <div className="Div1">
                <header >
                <div>
                    <div>
                        <h3>Check  rooms </h3><br/><br/>
                        <button onClick={this.onSearchButton}> Search </button>
                    </div>
                    <div>
                        <h3>Rooms</h3>
                        Enter room_id : <input
                                        type="text"
                                        value={this.state.value}
                                        onChange={this.input1}
                                        /><br/><br/>
                        Enter maximum_room_occupancy : <input
                                        type="value"
                                        value={this.state.value}
                                        onChange={this.input2}
                                        />  <br/><br/>                
                        Enter guest_email : <input
                                        type="text"
                                        value={this.state.value}
                                        onChange={this.input3}
                                        />     <br/><br/>               
                        Enter room_status : <input
                                        type="text"
                                        value={this.state.value}
                                        onChange={this.input4}
                                        /><br/><br/>
                        <button onClick={this.onButtonClick1}> Submit </button>
                    </div>
                        <div>
                            <h3> Getting Rooms Details</h3>
                            Enter room_id : <input
                                        type="text"
                                        value={this.state.value}
                                        onChange={this.input5}
                                        /><br/><br/>
                            <button onClick={this.onButtonGet}> Submit </button>
                        </div>
                        <div>
                            <h3> Delete Rooms Details</h3>
                            Enter room_id : <input
                                        type="text"
                                        value={this.state.value}
                                        onChange={this.input6}
                                        /><br/><br/>
                            <button onClick={this.onButtonDelete}> Submit </button>
                        </div>
                        <div className="Div2">
                            <h3>Rooms Reserve</h3>
                            Enter room_id : <input
                                        type="text"
                                        value={this.state.value}
                                        onChange={this.input7}
                                        /><br/><br/>
                            Enter guest_email : <input
                                        type="text"
                                        value={this.state.value}
                                        onChange={this.input8}
                                        /><br/><br/>
                                <button onClick={this.onButtonreserve}> Submit </button>
                        </div>
                            <div className="Div3">
                                <h3>Rooms Unreserve</h3>
                                Enter room_id : <input
                                            type="text"
                                            value={this.state.value}
                                            onChange={this.input9}
                                            /><br/><br/>
                                Enter guest_email : <input
                                            type="text"
                                            value={this.state.value}
                                            onChange={this.input10}
                                            /><br/><br/>
                                    <button onClick={this.onButtonUnreserve}> Submit </button>
                            </div>
                                <div className="Div4">
                                    <h3>Reservedrooms</h3>
                                    
                                    <button onClick={this.reservedrooms1}> Submit </button>
                                </div>

                </div>
                <div  className="Table1">
                    <table  >
                    {roomsTableElements}
                    </table>
                </div>

                </header>
            </div>
        );
    }
}

export default App;

