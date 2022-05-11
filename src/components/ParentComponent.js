
import React, { useEffect, useState } from 'react'

export default function ParentComponent() {

    let randomUrl = "https://picsum.photos/200?random=";
    // let keyMaker = 1;

    const [posts, setPosts] = useState([])

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPosts(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="container my-5">
                <div className="row row-cols-3">

                    {posts.length > 0 && (

                        posts.map(post => (

                            // <div className="container my-5">

                            //     <div className="col-lg-4 d-flex align-items-stretch">
                            <div className="card mx-2 my-2" style={{ width: "18rem" }} key={post.id}>
                                <div className="card-body" key={post.id}>
                                    <ol>
                                        <img className="card-img-bottom" style={{ marginBottom: "1px", width: "100%" }} src={randomUrl + post.id} alt="not found" />
                                        <hr></hr>
                                        <li key={post.userId + posts.length}><b>User Id</b>: {post.userId}</li>
                                        <li key={post.id}><b>Id</b>: {post.id}</li>
                                        <li key={post.title}><b>Title</b>: {post.title}</li>
                                        <li key={post.body}><b>Body</b>: {post.body}</li>
                                        {/* <img className="card-img-bottom" style={{ marginBottom: "1px" }} src={randomUrl + post.id} alt="not found" /> */}
                                    </ol>
                                </div>
                            </div>
                            //     </div>
                            // </div>
                        ))

                    )}
                </div>
            </div>
        </>
    )
}
