import React from 'react';
import {axiosWithAuth} from '../utilis/axiosWithAuth';
import AddFriend from './AddFriend';

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
        .then(res=>{ this.setState({friends: res.friends})
        })
        .catch(err=>{console.log('I have no friends:(', err)
        });
    };


    render(){
        return(
            <div className='friends-container'>
                <h1>I think I have friends...?</h1>
                {friends.map(friend=>(
                    <h3>{friend.name}</h3>
                ))}
                {/* <AddFriend/> */}
            </div>
        )
    }
}

export default Friends;