import React from 'react'

function page({ params }) {
    return (
        <div>Good Morning <strong>{params.name}</strong> Welcome to the blog</div>
    )
}

export default page