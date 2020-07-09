import React from 'react'

const ListTickets = (props) => {

    const { tickets, deleteTicket } = props
    const length = tickets.length
    const listTickets = length ? (
        tickets.map(ticket => {
            return (
                <div className="card mt-5 listTickets" key={ticket.id}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <p className="ticketId">TicketID : {ticket.id}</p>

                                {(ticket.status === 'Open') ? <p className="status open">{ticket.status}</p> :
                                    (ticket.status === 'In Progress') ? <p className="status inProgress">{ticket.status}</p> :
                                    (ticket.status === 'On Hold') ? <p className="status onHold">{ticket.status}</p> :
                                    (ticket.status === 'Solved') ? <p className="status solved">{ticket.status}</p> :
                                    (ticket.status === 'Closed') ? <p className="status closed">{ticket.status}</p> :
                                    <p className="status">{ticket.status}</p>
                                }
                            </div>
                            <div className="col-md-9">
                                <p className="subject">{ticket.subject}</p>
                                <p><span className="dateTicket"> {ticket.dateCreated}</span> - <span className="dateTicket"> {ticket.dateDue}</span></p>
                                <p className="description">{ticket.description}</p>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped mt-2 my-0">
                                <thead>
                                    <tr>
                                        <th scope="col">Project</th>
                                        <th scope="col">Requester</th>
                                        <th scope="col">Assigned to</th>
                                        <th scope="col">Priority</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    <tr >
                                        <td>{ticket.project}</td>
                                        <td>{ticket.requester}</td>
                                        <td>{ticket.assignedTo}</td>
                                        

                                        {(ticket.priority === 'Urgent') ? <td className="urgent">{ticket.priority}</td> : (ticket.priority === 'Medium') ? <td className="medium">{ticket.priority}</td> : <td className="low">{ticket.priority}</td>}
                                       

                                        <td className="actions-fa">
                                            <i className="fas fa-trash-alt" onClick={() => deleteTicket(ticket.id)}></i>
                                            <i className="fas fa-pencil-alt"></i>
                                            <i className="far fa-eye"></i>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="card mt-5 p-3 text-center">
            <div className="card-boy">
                <h3>List is empty</h3>
            </div>
        </div>
    )

    return (
        <React.Fragment>
            <h2>My support tickets</h2>
            <hr />
            <a href="/addticket" className="btn btn-danger mt-3"><i className="fas fa-plus"></i> Add ticket</a>
           {listTickets} 
        </React.Fragment>
    )
}


export default ListTickets;