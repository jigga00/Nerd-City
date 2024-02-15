import React from 'react';
import Navbar from './Navbar';
import Chat from './Chat';
import FriendsList from './FriendsList';
import PostForm from './PostForm'; // Import the PostForm component
import SignInSignUpPage from './SignInSignUp';

const Home = () => {
  // Define a function to handle post submission
  const handlePostSubmit = () => {
    // Add any logic you want to perform after a post is submitted
    console.log('Post submitted!');
  };

  return (
    <div>
      <Navbar />
      <h2>Welcome to Nerd City!</h2>
      <Chat />
      <FriendsList />
    
      <PostForm onPostSubmit={handlePostSubmit} />
      
      <SignInSignUpPage />
      {/* Add other content for the home page */}
    </div>
  );
};

export default Home;
