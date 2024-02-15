import React from 'react';

const FriendsList = () => {
  // Mock data for friends (replace with your actual data)
  const friends = [
    { id: 1, name: 'Friend 1', profilePicture: 'url_to_picture', isActive: true },
    // Add more friends...
  ];

  return (
    <div className="friends-list">
      <h3>Friends List</h3>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <img src={friend.profilePicture} alt={friend.name} />
            <span>{friend.name}</span>
            {friend.isActive ? <span>Active</span> : <span>Inactive</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;