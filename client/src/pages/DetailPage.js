import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import useAdminApi from '../api/adminApi'

export default function DetailPage() {
  const [post, setPost] = useState({});
  const { pathname } = useLocation();

  const { getPost } = useAdminApi()

  useEffect(() => {
    getPost(pathname.slice(1))
        .then(res => res.json())
            .then(data => setPost(data.post))
  }, [])

  console.log(post)

  return (
    <div className="detail__page">
      <h1>{post.title}</h1>

      <div className="detail__page-poster">
        <img src={`http://localhost:5000/${post.image}`} />
      </div>

      <div className="detail__page-text">
        <p>
          {post.info}
        </p>
      </div>
      <div className="back">
        <Link to="/">
          <span className="material-icons">keyboard_backspace</span> back
        </Link>
      </div>
    </div>
  );
}
