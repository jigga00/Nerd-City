import React, { useState, useEffect } from 'react';
import fetchFlickrAPI from '../fetchFlickrAPI';

const PostForm = ({ onPostSubmit }) => {
  const [media, setMedia] = useState(null);
  const [statement, setStatement] = useState('');
  const [posts, setPosts] = useState([]);

  const handleMediaChange = (event) => {
    setMedia(event.target.files[0]);
  };

  const handleStatementChange = (event) => {
    setStatement(event.target.value);
  };

  const handleSubmit = () => {
    const data = new FormData();
    data.append('media', media);
    data.append('statement', statement);

    // Call fetchFlickrAPI here
    fetchFlickrAPI(media, statement)
      .then(response => {
        console.log(response);

        // Update the posts list with the new post
        setPosts(prevPosts => [
          ...prevPosts,
          { media, statement },
        ]);

        // Notify parent component that a new post is submitted
        onPostSubmit();
      })
      .catch(error => {
        console.error(error);
        // Handle error
      });
  };

  // Display posts when they change
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div>
      <h3>Create a Post</h3>
      <form>
        <label>
          Upload Media:
          <input type="file" accept="image/*,video/*" onChange={handleMediaChange} />
        </label>
        <br />
        <label>
          Statement:
          <textarea value={statement} onChange={handleStatementChange} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Post
        </button>
      </form>

      {/* Display posts */}
      <div>
        <h3>Posts</h3>
        {posts.map((post, index) => (
          <div key={index}>
            {/* Display media */}
            {post.media && (
              <div>
                <img src={URL.createObjectURL(post.media)} alt="Media" width="100" />
              </div>
            )}
            {/* Display statement */}
            <div>
              <strong>Statement:</strong> {post.statement}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostForm;