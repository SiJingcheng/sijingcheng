import React, { Component } from 'react';

class RegisterBox extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="inner-container">
                <div className="header">
                    Register
                </div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="text">Username</label>
                        <input type="text" 
                        name="username" 
                        onChange={this.props.onUsrChange}
                        className="login-input" 
                        placeholder="Username"/>
                    </div>
                    <small className="danger-error">
                    {this.props.list.usrRepeated?"Username has been registered":""}
                    </small>
                    <small className="danger-error">
                    {this.props.list.usrEmpty?"Username cannot be empty":""}
                    </small>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                        name="email"
                        onChange={this.props.onEmaChange} 
                        className="login-input" 
                        placeholder="E-mail"/>
                    </div>
                    <small className="danger-error">
                    {this.props.list.emInvalid?"Invalid Email":""}
                    </small>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                        name="password" 
                        onChange={this.props.onPwdChange}
                        className="login-input" 
                        placeholder="Password"/>
                    </div>
                    <small className="danger-error">
                    {this.props.list.pwdShort?"Password is too short":""}
                    </small>
                    <div className="input-group">
                        <label htmlFor="retypepassword">Repeat Password</label>
                        <input type="password" 
                        name="retypepassword" 
                        onChange={this.props.onPwd2Change}
                        className="login-input" 
                        placeholder="Password"/>
                    </div>
                    <small className="danger-error">
                    {this.props.list.pwdNotRepeated?"Password is incorrect":""}
                    </small>
                    <button type="button" 
                    onClick={this.props.handleRegisterSubmit} 
                    className="login-btn">Register</button>
                </div>
            </div>
         );
    }
}
 
export default RegisterBox;