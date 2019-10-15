import React from 'react';
import {axiosWithAuth} from '../utilis/axiosWithAuth';

class Friends extends React.Component{
    state={
        friends: []
    };

    componentDidMount(){
        this.getData();
    }

    //fetch data from server
    //data is protected behind a token
    //so our request must include an 'Authorization: token' header

    getData=()=>{
        axiosWithAuth()
        .get('api/data')
        .then(res=>{console.log('Friends:', res)
            // this.setState({friends: res.data.data})
        })
        .catch(err=>{console.log('Dammit! Where mi friends at?', err)
        });
    };

    formatData = () => {
        const formattedFriends = [];
        console.log('format friend data', this.state.friends);
       
    }

    render(){
        const friends = this.formatData();
        console.log('We rendering here: ', friends);
        return(
            <div className='friends-container'>
                
            </div>
        )
    }
}

export default Friends;