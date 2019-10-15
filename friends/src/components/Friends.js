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
    //data is protected behind a token
    //so our request must include an 'Authorization: token' header

    // getData=()=>{
    //     axiosWithAuth()
    //     .get('api/server')
    //     .then(res=>{console.log('Friends:', res.friends)
    //         // this.setState({friends: res.data.data})
    //     })
    //     .catch(err=>{console.log('Dammit! Where mi friends at?', err)
    //     });
    // };

    // formatData = () => {
    //     const formattedFriends = [];
    //     console.log('format friend data', this.state.friends);
       
    // }

    render(){
        const friends = this.formatData();
        console.log('We rendering here: ', friends);
        return(
            <div className='friends-container'>
                <h1>I think I have friends...?</h1>
                {/* {friends.map(friend=>(
                    <h3>{friend.name}</h3>
                ))} */}
                <AddFriend/>
            </div>
        )
    }
}

export default Friends;