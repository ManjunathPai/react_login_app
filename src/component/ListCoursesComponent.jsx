import React, { Component } from 'react'
import UserDataService from '../service/UserDataService.js';
import axios from 'axios'


class ListCoursesComponent extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            courses: [],
            message: null,
            pic:[]
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        UserDataService.retrieveAllUser()
            .then((response) =>{
                this.setState({ courses: response[0].data })
                this.setState({pic:response[1].data})
            }
            )
    }


    render() {
        console.log('render')
        return (
           
            <div className="container">
                                
                <h3>Please find your details</h3>
                <div className="container">
                    <table className="table">
                                           <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Email</th>
                                <th>Profession</th>
                                <th>Profile Pic</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                                                       
                                        <tr>
                                            <td>{this.state.courses.username}</td>
                                            <td>{this.state.courses.email}</td>
                                            <td>{this.state.courses.profession}</td>
                                            <td><img  src={this.state.pic} style={{width: 150, height: 250}} className='tc br3' /></td>
                                        </tr>
                                
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListCoursesComponent
