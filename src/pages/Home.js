import React from 'react';
import axios from 'axios';
import Entry from '../components/Entry'
import Jumbotron from '../components/Jumbotron'

class Home extends React.Component {
    state = {
        data: [],
    }
    componentDidMount() {
        axios('https://randomuser.me/api/?results=12',
        )
            .then((res) => {
                console.log("Success Component Did Mount: " + res.data.results) 
                this.setState({ data: res.data.results })
            }
            );
    }

    filterMen = () => {
        const filteredMen = this.state.data.filter(person => person.gender === ("male"))
        console.log(filteredMen)
        this.setState({ data: filteredMen}) 
    }
    filterWomen = () => {
        const filteredWomen = this.state.data.filter(person => person.gender === ("female"))
        // console.log(filteredWomen)
        this.setState({ data: filteredWomen }) 
    }
    // filterDobAsc = () => {
    //     console.log(this.data.)
    // }
    render() {

        return (
            <div>
                <Jumbotron />
                <Entry 
                 data={this.state.data}
                 filterMen={this.filterMen}
                 filterWomen={this.filterWomen}
                  />
            </div>
        )
    }

}

export default Home;