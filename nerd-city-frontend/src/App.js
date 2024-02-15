import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import FriendsList from './components/FriendsList';
import Chat from './components/Chat';
// import SignInSignUpPage from './components/SignInSignUp';

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/signin" element={<SignInSignUpPage />} /> */}
         (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/friends" element={<FriendsList />} />
            <Route path="/chat" element={<Chat />} />
          </>
        ) 
      </Routes>
    </Router>
  );
}

export default App;
