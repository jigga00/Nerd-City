import React, { useState } from 'react';
import FriendsList from './FriendsList';

const Profile = () => {
  const [picture, setPicture] = useState(null);
  const [statement, setStatement] = useState('');

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
  };

  const handleStatementChange = (event) => {
    setStatement(event.target.value);
  };

  const handleSubmit = () => {
    // You can use 'picture' and 'statement' here if needed
    console.log('Submit:', picture, statement);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form>
        <label>
          Upload Picture:
          <input type="file" accept="image/*" onChange={handlePictureChange} />
        </label>
        <br />
        <label>
          Statement:
          <textarea value={statement} onChange={handleStatementChange} />
        </label>
        <br />
        <FriendsList />
        <button type="button" onClick={handleSubmit}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
