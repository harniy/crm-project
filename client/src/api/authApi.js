import React from "react";


export default function authApi() {

    const userLogin = async (username, password) => {
        const data = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }).then(res => res.json())

        return data
    }

    return {userLogin}
}