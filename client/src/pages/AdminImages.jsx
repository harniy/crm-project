import React, { useEffect, useState } from "react";

import useAdminApi from "../api/adminApi";

export default function AdminImages() {
  const [images, setImages] = useState([]);

  const { getAllImages } = useAdminApi();

  useEffect(() => {
    getAllImages()
      .then((res) => res.json())
      .then((data) => setImages(data.images));
  }, []);

  return (
    <div className="image__container">
        <h3>Images</h3>
        <hr />
      <ul className="images__list">
        {images?.map(({image, _id}) => (
          <li className="images__list-item" key={_id}>
            <div className="images__item-image">
              <img src={`http://localhost:5000/${image}`} alt="" />
            </div>
            <div className="images__item-url">
              <p>{image}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
