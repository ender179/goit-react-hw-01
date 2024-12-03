import React from 'react';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li>
      <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p style={{ color: isOnline ? 'green' : 'red' }}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;