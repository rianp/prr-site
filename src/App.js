import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from './Post';
import './App.css';  // for your styles

const App = () => {
  // State to hold the list of posts
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  // Dummy data fetching function (you can replace this with an API call)
  const fetchPosts = () => {
    const newPosts = [];
    for (let i = 0; i < 10; i++) {
      newPosts.push({
        id: posts.length + i,
        imageUrl: `https://picsum.photos/800/600?random=${posts.length + i}`,
        caption: `This is a caption for post ${posts.length + i}`
      });
    }
    return newPosts;
  };

  // Infinite scroll handler
  const fetchMoreData = () => {
    const newPosts = fetchPosts();
    setPosts(prevPosts => [...prevPosts, ...newPosts]);
    if (posts.length >= 50) {
      setHasMore(false); // Stop fetching after 50 posts
    }
  };

  useEffect(() => {
    fetchMoreData(); // Load initial posts on mount
  }, []);

  return (
    <div className="App">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more posts to show</p>}
      >
        <div className="posts-container">
          {posts.map(post => (
            <Post key={post.id} imageUrl={post.imageUrl} caption={post.caption} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default App;
