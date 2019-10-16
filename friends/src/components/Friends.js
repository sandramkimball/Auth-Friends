import React from 'react';
import {axiosWithAuth} from '../utilis/axiosWithAuth';
import AddFriend from './AddFriend';
import Friend from './Friend';

class Friends extends React.Component{
    state = {
        friends: []
    };

    componentDidMount(){
        this.getData();
    }

    //fetch data from server
    //data is protected behind a token so request must include 'Authorization: token' header

    getData=()=>{
        axiosWithAuth()
        .get('api/friends')
        .then(res=> { console.log('Here are some friends:', res.data)
            const friendsList = res.data;
            this.setState({friends: friendsList})
        })
        .catch(err=>{console.log('I have no friends:(', err)
        });
    };

    deleteFriend = (e, id) => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`/api/friends/${id}`, this.state.newFriend)
        .then(res=> {
            localStorage.setItem('token', res.data.payload.filter(friend=> !friend.id))
        })
        .catch(err=>console.log('Friend not added.', err.response))
    }

    render(){
        return(
            <div className='friends-container'>
                <h1>I think I have friends...?</h1>
                {this.state.friends.map(friend=>(
                    <div>
                        <Friend key={friend.id} friend={friend}/>
                        <button onCLick={this.deleteFriend}>X</button>
                    </div>
                ))}

                <AddFriend/>
            </div>
        )
    }
}

export default Friends;