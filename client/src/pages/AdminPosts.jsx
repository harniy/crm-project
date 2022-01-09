import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

import useAdminApi from '../api/adminApi'

export default function AdminPosts(){
    const [posts, setPosts] = useState([])

    const { getAllPosts } = useAdminApi()

    useEffect(() => {
        getAllPosts()
            .then(res => res.json())
                .then(data => setPosts(data.posts))
    }, [])

    console.log(posts)

    return(
        <div style={{ textAlign: 'center', position: 'relative'}}>
            <h3>All posts</h3>
            <div className="admin__add-link">
                <Link to="add" >add</Link>
            </div>
            <hr />
            <div className="posts__section">
                <ul className="posts__section-list">
                   {posts?.map(({_id, title}, idx) => (
                        <li className="posts__section-item" key={_id}>
                        <div className="post-id">
                            id: {idx + 1}
                        </div>
                        <div className="post-title">
                            <a href="#" className="post-title-link">{title}</a>
                        </div>
                    </li>
                   ))}

                </ul>
            </div>
        </div>
    )
}