//https://jsonplaceholder.typicode.com/posts

import {  useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostList = () => {
    const [posts, setPost] = useState([]);
    const URL = "https://jsonplaceholder.typicode.com/posts" // localhost:8080 `${URL}/products`

    useEffect(() => {
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setPost(data)
        })
        .catch((error) => {
            console.error("Error:", error)
        })
    }, [] )

    return (
        <>
        <h1>Publicaciones </h1>
        <div> 
            {posts.map((post)=>(
                <PostCard 
                key={post.id}
                title = {post.title}
                body = {post.body}
                id = {post.id}
                
                />
            ))}
        </div>
        </>
    )
}

export default PostList;
