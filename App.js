import React, { Component } from 'react';
import LoginBox from './components/LoginBox';
import RegisterBox from './components/RegisterBox'
import './App.css';


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class App extends Component {
  state = { 
    isLoginOpen:true,
    isRegisterOpen:false,
    username:"",
    password:"",
    password2:"",
    email:"",
    pwdNotRepeated:"",
    usrEmpty:"",
    usrRepeated:"",
    emInvalid:"",
    pwdShort:"",
    logFail:""
   }
  
  handleLoginSubmit=()=>{
    this.setState({logFail:""});
    if (this.state.password.length<3){
      this.setState({pwdShort:true});
    }
    else if (this.state.username===""){
      this.setState({usrEmpty:true});
    }
    else{
      this.setState({pwdShort:"",usrEmpty:""});
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      headers.append('Accept','application/json');
      headers.append('Origin','http://localhost:3000');
      fetch('http://localhost:5000/static/login',
        {method:'POST',
        mode:'cors',
        body:JSON.stringify({username:this.state.username,password:this.state.password}),
        headers:headers})
        .then(response=>response.json())
        .then(d=>this.handleResponse(d.flag))
        .catch(error=>console.log(error));
    }
  }
  
  handleRegisterSubmit=()=>{
    this.setState({usrRepeated:""});
    if (this.state.password.length<3){
      this.setState({pwdShort:true});
    }
    else if (this.state.username===""){
      this.setState({usrEmpty:true});
    }
    else{
      this.setState({pwdShort:"",usrEmpty:""});
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      headers.append('Accept','application/json');
      headers.append('Origin','http://localhost:3000');
      fetch('http://localhost:5000/static/login',
        {method:'POST',
        mode:'cors',
        body:JSON.stringify({username:this.state.username,password:this.state.password,email:this.state.email}),
        headers:headers})
        .then(response=>response.json())
        .then(d=>this.handleResponse(d.flag))
        .catch(error=>console.log(error));
    }
  }

  handleResponse=flag=>{
        if (flag==="1")
        {
          this.setState({logFail:true});
        }
        else if (flag==="2")
        {
          this.setState({usrRepeated:true}); 
        }
        else
        {
          console.log("success");
        }
  }

  showLoginBox=()=>{
    this.setState({isLoginOpen:true,isRegisterOpen:false});
  }

  showRegisterBox=()=>{
    this.setState({isRegisterOpen:true,isLoginOpen:false});
  } 

  onUsrChange=(e)=>{
    this.setState({username:e.target.value});
  }

  onPwdChange=(e)=>{
    this.setState({password:e.target.value});
  }

  onPwd2Change=(e)=>{
    this.setState({password2:e.target.value},
      ()=>{
        if (this.state.password!==this.state.password2)
        {
          this.setState({pwdNotRepeated:true});
        }  
        else
        {
            this.setState({pwdNotRepeated:""});
        } 
      }
    );
  }

  onEmaChange=(e)=>{
    this.setState({email:e.target.value},()=>this.setState({emInvalid:!(emailRegex.test(this.state.email))}));
  }

  render() {
    return (
      <div className="root-container">
        <div className="box-controller">
          <div className=
          {"controller"+(this.state.isLoginOpen?" selected-controller":"")} 
          onClick={this.showLoginBox}>
            Login
          </div>
          <div className=
          {"controller"+(this.state.isRegisterOpen?" selected-controller":"")}
          onClick={this.showRegisterBox}>
            Register
          </div>
        </div>
        <div className="box-container">
          {this.state.isLoginOpen && 
          <LoginBox handleLoginSubmit={this.handleLoginSubmit} 
                    onUsrChange={this.onUsrChange} 
                    onPwdChange={this.onPwdChange}
                    list={this.state} />}
          {this.state.isRegisterOpen && 
          <RegisterBox handleRegisterSubmit={this.handleRegisterSubmit}
                    onUsrChange={this.onUsrChange}
                    onPwd2Change={this.onPwd2Change}
                    onEmaChange={this.onEmaChange}
                    onPwdChange={this.onPwdChange}
                    list={this.state}/>}
        </div>
      </div>
     );
  }
}
 
export default App;

