import axios from 'axios';

const authService = {
  signIn: async (email, password) => {
    try {
      return await axios.post('/api/signin', { email, password });
    } catch (error) {
      throw error;
    }
  },

  signUp: async (email, password) => {
    try {
      return await axios.post('/api/signup', { email, password });
    } catch (error) {
      throw error;
    }
  },
};

export default authService;