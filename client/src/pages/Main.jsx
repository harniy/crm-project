import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useAdminApi from "../api/adminApi";

export default function Main() {
  const [posts, setPosts] = useState([]);

  const { getAllPosts } = useAdminApi();

  useEffect(() => {
    getAllPosts()
        .then(res => res.json())
            .then(data => setPosts(data.posts))
  }, [])

  
  return (
    <div className="main__page">
      <h1>All posts</h1>
      <div className="posts__page">
        {posts?.map(({title, image, _id}) => (
            <div className="main__page-post" key={_id}>
            <div className="main__page-img">
              <img
                src={`http://localhost:5000/${image}`}
                alt=""
                className="main__page-poster"
              />
            </div>
            <div className="main__page-title">
              <Link to={_id}>
                  <p>{title}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
