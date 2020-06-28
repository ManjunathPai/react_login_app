import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';
import Axios from 'axios';

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
            user:[]
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
    
        AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                AuthenticationService.executeUserService(this.state.username, this.state.password)
                .then(
                    response => {
                        this.setState({user:response.data})
                    }
                )
                

                
               console.log(this.state.user);
                this.props.history.push(`/userdetails`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })


    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    <tr>
                    User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </tr><br>
                    </br>
                    <tr>
                    Password :   <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </tr>
                    <br></br>
                    <tr>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                    </tr>
                </div>
            </div>
        )
    }
}

export default LoginComponent