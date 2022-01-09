import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import useAdminApi from "../api/adminApi";
import Navigation from "../components/AdminComponents/Navigation";
import AdminAddPost from "./AdminAddPost";
import AdminImages from "./AdminImages";
import AdminPosts from "./AdminPosts";


export default function Admin() {
  const [isAdmin, setIsAdmin] = useState();
  const navigate = useNavigate();

  const { getAdminInfo } = useAdminApi();

  useEffect(async () => {
    const cookies = document?.cookie
      ?.split(";")[1]
      ?.replace("accessToken=", "");

    if (!cookies) {
      navigate("/login");
      return;
    }

    const checkAdmin = await getAdminInfo(cookies);

    checkAdmin.roles.includes("ADMIN") ? navigate("/admin/posts") : navigate("/login");

    setIsAdmin(true)
  }, []);

  return (
    <div>
      {isAdmin && (
        <div className="admin__page">
          <div className="left__section">
            <Navigation />
          </div>
          <div className="right__section">
            <Routes>
              <Route path="posts" element={<AdminPosts />} />
              <Route path="images" element={<AdminImages />} />
              <Route path="posts/add" element={<AdminAddPost />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}
