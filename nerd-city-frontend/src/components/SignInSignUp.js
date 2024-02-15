import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from './AuthService';
import Home from './Home';

const SignInSignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onSignUp = async () => {
    try {
      // Validate the form fields
      if (!email || !username || !password || !confirmPassword) {
        console.error('Please fill in all fields.');
        return;
      }
  
      if (password !== confirmPassword) {
        console.error('Passwords do not match.');
        return;
      }
  
      // Your sign-up logic here
      const response = await authService.signUp(email, password);
  
      // Use the response data if needed
      console.log('Sign-up response:', response);

      // Update authentication status
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Sign-up error:', error);
      // Handle error
    }
  };

  // If authenticated, redirect to the home page
  if (isAuthenticated) {
    return <Home />;
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </label>
        <br />
        <button type="button" onClick={onSignUp}>
          Sign Up
        </button>
        <p onClick={() => navigate('/signin')}>
          Already have an account? Sign in here.
        </p>
      </form>
    </div>
  );
};

export default SignInSignUpPage;