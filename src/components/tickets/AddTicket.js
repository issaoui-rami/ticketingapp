import React, { Component } from 'react'
import './Tickets.css'

export default class AddTicket extends Component {

    state = {
        id: '',
        project: '',
        status: '',
        subject: '',
        description: '',
        requester: '',
        assignedTo: '',
        priority: '',
        dateCreated: '',
        dateDue: '',
        attachments: ''
       
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTicket(this.state)
        this.setState({
            id: '',
            project: '',
            status: '',
            subject: '',
            description: '',
            requester: '',
            assignedTo: '',
            priority: '',
            dateCreated: '',
            dateDue: '',
            attachments: ''
        })
    }

    render() {
        return (
            <div className="card my-3">
                <div className="card-header"><h4>New ticket</h4></div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            {/* ----------------- Project champ ------------------- */}
                            <label htmlFor="projet">Project</label>
                            <select className="custom-select mb-3" name="project" onChange={this.handleChange} value={this.state.project}>
                                <option selected>Choose Project...</option>
                                <option value="P0112">P0112</option>
                                <option value="P0015">P0015</option>
                                <option value="P5510">P5510</option>
                            </select>
                            {/* ----------------- Status champ ------------------- */}
                            <label htmlFor="status">Status</label>
                            <select className="custom-select mb-3"  name="status" onChange={this.handleChange} value={this.state.status}>
                                <option selected value="Open">Open</option>
                                <option value="In Progress">In Progress</option>
                                <option value="On Hold">On Hold</option>
                                <option value="Solved">Solved</option>
                                <option vlaue="Closed">Closed</option>
                            </select>
                            {/* ----------------- Subject champ ------------------- */}
                            <label htmlFor="subject">Subject</label>
                            <input type="text" className="form-control mb-3" name="subject" onChange={this.handleChange} value={this.state.subject}/>
                            {/* ----------------- Description champ ------------------- */}
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control" rows="4" name="description" onChange={this.handleChange} value={this.state.description}>
                                </textarea>
                            </div>
                            {/* ----------------- Assigned to champ ------------------- */}
                            <label htmlFor="assignedTo">Assigned To</label>
                            <select className="custom-select mb-3" name="assignedTo" onChange={this.handleChange} value={this.state.assignedTo}>
                                <option selected value="Rami Issaoui">Rami Issaoui</option>
                                <option value="Samih daboussi">Samih daboussi</option>
                                <option value="Yahya ayari">Yahya ayari</option>
                                <option vlaue="Marwa youssfi">Marwa youssfi</option>
                            </select>
                            {/* ----------------- Priority champ ------------------- */}
                            <label htmlFor="priority">Priority</label>
                            <select className="custom-select mb-3" name="priority" onChange={this.handleChange} value={this.state.priority}>
                                <option selected value="Low">Low</option>
                                <option value="Urgent">Urgent</option>
                                <option value="Medium">Medium</option>
                            </select>
                            {/* ----------------- Start date champ ------------------- */}
                            <label htmlFor="startdate">Start Date</label>
                            <input type="date" className="form-control mb-3" name="startdate" onChange={this.handleChange} value={this.state.dateCreated}/>
                            {/* ----------------- Start date champ ------------------- */}
                            <label htmlFor="enddate">End Date</label>
                            <input type="date" className="form-control mb-3" name="enddate" onChange={this.handleChange} value={this.state.dateDue}/>
                            {/* ----------------- file champ ------------------- */}
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" name="file" onChange={this.handleChange} value={this.state.attachments}/>
                                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                            </div>
                        </div>
                        <button className="btn btn-dark btn-block">
                            Add new Ticket !
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
