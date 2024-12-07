import React from 'react';  
import FriendList from './components/FriendList/FriendList';  
import Profile from './components/Profile/Profile'; 
import TransactionHistory from './components/TransactionHistory/TransactionHistory'; 
import './styles.css'; 

const App = () => {  
  return (  
    <div>  
      <h1>Друзья</h1>  
      <FriendList />  
      <h1>Профили</h1>  
      <Profile />  
      <h1>История транзакций</h1>  
      <TransactionHistory />  
    </div>  
  );  
};  

export default App;