import React from 'react';  
import FriendList from './components/FriendList/FriendList';  
import friendsData from './data/friends.json';  

const App = () => {  
    return (  
        <div>  
            <FriendList friends={friendsData} />  
        </div>  
    );  
};  

export default App;