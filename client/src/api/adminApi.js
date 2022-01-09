import React from "react";


export default function AdminApi() {

    const getAdminInfo = async (token) => {
        const data = await fetch('http://localhost:5000/admin', {
            method: "GET",
            headers: {
                'Authorization': `Bearer${token}`
            }
        }).then(res => res.json())

        return data
    }

    const createPost = async (formData) => {
        const data = await fetch('http://localhost:5000/admin/add', {
            method: "POST",
            body: formData
        }).then(res => res.json())

        return data
    }

    const getAllPosts = async (formData) => {
        const data = await fetch('http://localhost:5000/admin/all-posts')

        return data
    }

    const getAllImages = async () => {
        const data = await fetch('http://localhost:5000/admin/all-images')

        return data
    }

    const getPost = async (url) => {
        const data = await fetch(`http://localhost:5000/admin/get-post/?post=${url}`)

        return data
    }

    return {getAdminInfo, createPost, getAllPosts, getAllImages, getPost}
}