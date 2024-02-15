const uploadMediaAndStatement = async (req, res) => {
    try {
      // Implement the logic to handle media and statement upload
      // Access data from req.body for media and statement
  
      // For now, let's just send a success message
      res.json({ message: 'Media and statement uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    // ... other controllers
    uploadMediaAndStatement,
  };
  
