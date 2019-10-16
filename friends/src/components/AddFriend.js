import React from 'react';
import {axiosWithAuth} from '../utilis/axiosWithAuth';

class AddFriend extends React.Component {
    state = {
        newFriend: {
            id: Date.now(),
            name: '',
            age: '',
            email: ''
        }
    };

    handleChange = e =>{
        this.setState({
            newFriend: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    submitFriend = e =>{
        e.preventDefault();
    }

    //login to retrieve the JWT token.
    //add token to localstorage. (in redux, token saved in state)
    //route to /protected (or whatev landing page)
    addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', this.state.newFriend)
        .then(res=> {
            localStorage.setItem('token', res.data.payload)
        })
        .catch(err=>console.log('Friend not added.', err.response))
    }

    render(){
        return (
            <div className='form' onSubmit={this.addFriend}>
                <form>
                    <input 
                    type='text' 
                    name='name' 
                    value={this.state.name} 
                    placeholder='Name'
                    onChange={this.handleChange}/>

                    <input 
                    type='text' 
                    name='age' 
                    placeholder='Age'
                    value={this.state.age} 
                    onChange={this.handleChange}/>

                    <input 
                    type='text' 
                    name='email' 
                    placeholder='Email'
                    value={this.state.email} 
                    onChange={this.handleChange}/>

                    <button tpye='submit'>Add Friend</button>
                </form>
            </div>
        );
    }
}

export default AddFriend;