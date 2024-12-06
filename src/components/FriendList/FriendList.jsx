import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import styles from './FriendList.module.css';
import friendsData from '../../data/friends.json';

const FriendList = () => {
    return (
        <ul className={styles.friendList}>
            {friendsData.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
};

export default FriendList;
