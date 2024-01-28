import { useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Post[]) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <h1>Posts from JSONPlaceholder</h1>
      <div>
        {posts.map((post) => (
          <ul key={post.id}>
            <li>{post.title}</li>
            <li>{post.body}</li>
            <hr />
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
