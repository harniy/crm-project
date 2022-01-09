import React, { useState } from "react";

import useAdminApi from "../api/adminApi";

export default function AdminAddPost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [info, setInfo] = useState("");
  const [createInfo, setCreateInfo] = useState({});

  const { createPost } = useAdminApi();

  const setPostData = async () => {
    if (!title.length || !image || !info.length) {
      console.log(1);
      setCreateInfo({ message: "Cannot be empty" });
      return;
    }
    const postInfo = { title, info };

    const formData = new FormData();

    formData.append("image", image);
    formData.append("info", JSON.stringify(postInfo));

    const post = await createPost(formData);

    setCreateInfo(post);
  };

  return (
    <div className="post__add-container">
      <h3>Add post:</h3>
      <hr />
      <div>
        <ul>
          <li>
            <div>
              <p>Title</p>
            </div>
            <div>
              <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </div>
          </li>
          <li>
            <div>
              <p>Image</p>
            </div>
            <div>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </li>
          <li>
            <div>
              <p>Info</p>
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                onChange={(e) => setInfo(e.target.value)}
              ></textarea>
            </div>
          </li>
        </ul>

        <button onClick={setPostData}>add post</button>
      </div>

      {createInfo && (
        <p style={{ textAlign: "center" }}>{createInfo.message}</p>
      )}
    </div>
  );
}
