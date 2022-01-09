import React from "react";
import { Link } from "react-router-dom";

import './adminStyle.css'

export default function Navigation() {
  return (
    <div>
      <ul className="admin__list">
        <li>
          <Link to="/admin/posts">Posts</Link>
        </li>
        <li>
          <Link to="/admin/images">Images</Link>
        </li>
      </ul>
      <div className="website__link">
        <Link to="/">WebSite</Link>
      </div>
    </div>
  );
}
