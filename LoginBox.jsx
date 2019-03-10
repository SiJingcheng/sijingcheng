import React, { Component } from 'react';

class LoginBox extends Component {
    render() { 
        return ( 
            <div className="inner-container">
                <div className="header">
                    Login
                </div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" 
                        name="username" 
                        onChange={this.props.onUsrChange} 
                        className="login-input" 
                        placeholder="Username"/>
                    </div>
                    <small className="danger-error">
                    {this.props.list.usrEmpty?"Username cannot be empty!":""}
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
                    <button type="button" 
                    className="login-btn" 
                    onClick={this.props.handleLoginSubmit}>login</button>
                </div>

            </div>
        );
    }
}


export default LoginBox;