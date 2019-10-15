import React from 'react';
import {axiosWithAuth} from '../utilis/axiosWithAuth';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e =>{
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    //login to retrieve the JWT token.
    //add token to localstorage. (in redux, token saved in state)
    //route to /protected (or whatev landing page)
    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res=> {
            localStorage.setItem('token', res);
            this.props.history.push('/protected');
        })
        .catch(err=>console.log('Access Denied, Cyborg!', err))
    }

    render(){
        if (localStorage.getItem('token')){
            return <Redirect to='protected'/>
        }
        return (
            <div className='form' onSubmit={this.login}>
                <form>
                    <input type='text' name='username' value={this.state.credentials.username} onChange={this.handleChange}/>

                    <input type='password' name='password' value={this.state.credentials.password} onChange={this.handleChange}/>

                    <button>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;