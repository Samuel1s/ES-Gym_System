import React from 'react';
import axios from 'axios';

export default class UserList extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`https:/8000/sasdas`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
  
    render() {
      return (
        <ul>
          { this.state.persons.map(person => <li>{person}</li>)}
        </ul>
      )
    }
  }