import React, { Component } from 'react'
import AddTicket from './components/tickets/AddTicket'
import ListTickets from './components/tickets/ListTickets'

class App extends Component {

  state = {
    tickets: [
      {
        id: 1,
        project: 'Project23',
        status: 'Open',
        subject: 'Application React js',
        description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès il est prêt ou que la mise en page est achevée.',
        requester: 'Dalila meftah',
        assignedTo: 'Samih derbeli',
        priority: 'Urgent',
        dateCreated: '20/05/2020',
        dateDue: '27/05/2020',
        attachments: 'pdf'
      }
      
    ]
  }

  deleteTicket = (id) => {
    let tickets = this.state.tickets;
    let i = tickets.findIndex(ticket => ticket.id === id)
    tickets.splice(i, 1)
    this.setState({tickets})
  }

  addTicket = (ticket) => {
    ticket.id = Math.random();
    let tickets = this.state.tickets;
    tickets.push(ticket);
    this.setState({ tickets });
  
  }

  render() {
    return (
      <div className="container">
        
        <ListTickets tickets={this.state.tickets} deleteTicket={this.deleteTicket}/>
        <AddTicket addTicket={this.addTicket} />
      </div>
    )
  }
}


export default App;
