import React, { useState } from 'react';
import { uploadPictureAndStatement } from '../api';

const fetchFlickrAPI = async () => {
  const encodedParams = new URLSearchParams();
  encodedParams.set('accessToken', '<REQUIRED>');
  encodedParams.set('photosetId', '<REQUIRED>');
  encodedParams.set('accessSecret', '<REQUIRED>');
  encodedParams.set('commentText', '<REQUIRED>');

  const url = 'https://flickrdidenkoradionv1.p.rapidapi.com/addComment';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'FlickrdidenkoradionV1.p.rapidapi.com'
    },
    body: encodedParams
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

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
    const data = new FormData();
    data.append('picture', picture);
    data.append('statement', statement);

    uploadPictureAndStatement(data)
      .then(response => {
        console.log(response);
        // Handle success

        // Make Flickr API call after successful picture and statement upload
        fetchFlickrAPI();
      })
      .catch(error => {
        console.error(error);
        // Handle error
      });
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
        <button type="button" onClick={handleSubmit}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;