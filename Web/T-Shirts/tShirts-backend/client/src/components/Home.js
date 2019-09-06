import React, { Component } from 'react';

class Home extends Component {
    tableStyle = {
        table: {
            bordercollapse: 'collapse',
            width: '100%'
          }
    }

    tdStyle = {
        td: {
            textalign: 'left',
            padding: '8px'
          }
    }

    thStyle = {
        th: {
            backgroundcolor: '#4CAF50',
            color: 'white',
            textalign: 'left',
            padding: '8px'
          }
    }
    
    constructor(props) {
        super(props);
        this.state = { tShirts: [], firstName: '', lastName: '', type: '', color: '', size: ''};
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        fetch('http://localhost:3000/')
            .then(res => {
                return res.json();
            })
            .then(posts => {
                
                this.setState({tShirts: posts})
            });
    }

    handleFirstNameChange(event){
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event){
        this.setState({lastName: event.target.value}); 
    }

    handleTypeChange(event){
        this.setState({type: event.target.value});
    }

    handleColorChange(event){
        this.setState({color: event.target.value});
    }

    handleSizeChange(event){
        this.setState({size: event.target.value}); 
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(this.state.tShirts)
        let body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            type: this.state.type,
            color: this.state.color,
            size: this.state.size
        }
        console.log(body);
        fetch("http://localhost:3000/", {
            method: "post",  
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(body)
        }).then(()=>{
            console.log("res recieved");
            window.location.reload();
        })
    }

    handleEdit(id, event){
        event.preventDefault();
        this.setState(this.state.tShirts)

        let body = {
            id: id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            type: this.state.type,
            color: this.state.color,
            size: this.state.size
        }
        console.log(body);
        fetch("http://localhost:3000/", {
            method: "put",  
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(body)
        }).then(()=>{
            console.log("res recieved");
            window.location.reload();
        })
    }

    handleDelete(id){
        fetch('http://localhost:3000/', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: id})
            })
            .then(res => res.json())
            .then(res => window.location.reload())
    }

    render() {
        console.log("tShirts", this.state.tShirts)
        return (
        <>
        <form onSubmit={this.handleSubmit}>
            <label>
                First name:
                <input type="text" name="firstName" onChange={this.handleFirstNameChange}/>
            </label>
            <label>
                Last name:
                <input type="text" name="lastName" onChange={this.handleLastNameChange}/>
            </label>
            <label>
                Type:
                <input type="text" name="type" onChange={this.handleTypeChange}/>
            </label>
            <label>
                Color:
                <input type="text" name="color" onChange={this.handleColorChange}/>
            </label>
            <label>
                Size:
                <input type="text" name="size" onChange={this.handleSizeChange}/>
            </label>
            <input type="submit" value="Submit" />
        </form> 
        <table style={this.tableStyle}>
          <tbody>
            <tr>
                <th style={this.thStyle}>Първо име</th> 
                <th style={this.thStyle}>Фамилия</th> 
                <th style={this.thStyle}>Тип</th> 
                <th style={this.thStyle}>Цвят</th> 
                <th style={this.thStyle}>Размер</th> 
            </tr>
            {this.state.tShirts.map(tShirt => {
                return (<tr key={tShirt.id}>
                    <td ref='firstName' style={this.tdStyle}>{tShirt.firstName}</td> 
                    <td ref='lastName' style={this.tdStyle}>{tShirt.lastName}</td> 
                    <td ref='type' style={this.tdStyle}>{tShirt.type}</td> 
                    <td ref='color' style={this.tdStyle}>{tShirt.color}</td> 
                    <td ref='size' style={this.tdStyle}>{tShirt.size}</td> 
                    <td><button onClick={(event) => {this.handleEdit(tShirt.id, event)}}>Edit</button></td>
                    <td><button onClick={() => {this.handleDelete(tShirt.id)}}>Delete</button></td>
                </tr>);
            })}
           </tbody>
        </table>
        </>
      );
    }
}

export default Home;