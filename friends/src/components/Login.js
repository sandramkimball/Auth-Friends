import React from 'react';
import {axiosWithAuth} from '../utilis/axiosWithAuth';

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

    //login to retrieve the JWT toekn.
    //add token to localstorage. (in redux, token saved in state)
    //route to /protected (or whatev landing page)
    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res=> {
            localStorage.setItem('token:', res.data.payload);
            this.props.history.push('protected');
        })
        .catch(err=>console.log('Whoops!', err.response))
    }

    render(){
        return (
            <div className='login-form' onSubmit={this.login}>
                <form>
                    <input type='text' name='username' value={this.state.credentials.username} onChange={this.handleChange}/>

                    <input type='password' name='password' value={this.state.credentials.password} onChange={this.handleChange}/>

                    <button tpye='submit'>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;