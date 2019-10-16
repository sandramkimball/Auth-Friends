import React from 'react';

class Friend extends React.Component {
    state={
        friend: {}
    };

    

    render(){
        return (
            <div className='friend-card'>
                <h3>{this.state.friend.name}</h3>       
            </div>     
            
        )
    }
}

export default Friend;