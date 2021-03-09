import React from 'react';
import Button from '@material-ui/core/Button';
import './Login.css';


export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
        emailError: '',
        passwordError: ''
    };

    handleLogin = event => {
        event.preventDefault();
        const { email, password } = this.state;
        this.setState({
            ...this.state,
            emailError: email.length > 0 ? "" : "Need to enter a username",
            passwordError: password.length > 0 ? "" : "Need to enter a password"
        });
    };

    handleOnchange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
    
        /* document is not definedvar myForm= document.forms.myForm;
        myForm.email.onfocus = function(){
            myForm.email.style.border = "4px solid pink";
        };*/ 

        return (
            <form className="form">
                <h1 className="login-form__header">Log Into Your Account</h1>
                <input
                    type="text"
                    name="email"
                    placeholder=" Email"
                    className="login-form__input"
                    onChange={this.handleOnchange}
                />
                {this.state.emailError && (
                    <p class="login-form__error"> {this.state.emailError}</p>
                )}
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder=" Password"
                    className="login-form__input"
                    onChange={this.handleOnchange}
                />
                {this.state.passwordError && (
                    <p class="login-form__error"> {this.state.passwordError}</p>
                )}
                <br />
                <Button
                    variant="outlined"
                    color="primary"
                    className="login-form__button"
                    onClick={this.handleLogin}
                >
                    Log in
                </Button>
            </form>
        )
    }
}
