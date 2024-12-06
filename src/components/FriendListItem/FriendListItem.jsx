import React from 'react';  
import styles from './FriendListItem.module.css';  

const FriendListItem = ({ avatar, name, isOnline }) => {  
  return (  
    <li className={styles.item}>  
      <span className={isOnline ? styles.online : styles.offline}></span>  
      <img src={avatar} alt="User avatar" className={styles.avatar} />  
      <p className={styles.name}>{name}</p>  
      <p className={isOnline ? styles.onlineText : styles.offlineText}>  
        {isOnline ? 'Online' : 'Offline'}  
      </p>  
    </li>  
  );  
};  

export default FriendListItem;