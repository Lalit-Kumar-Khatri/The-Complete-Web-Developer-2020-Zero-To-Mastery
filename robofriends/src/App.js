import React, { Component } from "react";
import CardList from "./CardList";
import Searchbox from "./Searchbox";
import "./App.css";
import Scroll from "./Scroll";


class App extends Component {
    constructor(){
        super ()
        this.state = {
            robots: [],
            searchfield: ''
        }
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));
    }

     onSearchChange = (event) => {
         this.setState({ searchfield: event.target.value })
    }

     render () {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
        return (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

}
    

export default App;