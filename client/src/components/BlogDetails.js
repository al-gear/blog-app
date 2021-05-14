import React from 'react'
import { useHistory, useParams } from 'react-router';
import useFetch from '../useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:5000/blogs/' + id)
    const history = useHistory();

    const handleDelete = () => {
        fetch(`http://localhost:5000/blogs/${id}`, {
            method: "DELETE",

        }).then(() => {
            history.push("/")
        })
    }

    return (
        <div className="blog-details" >
            {isPending && <div>Loading...</div>}
            {error && <div> {error} </div>}
            {blog && (


                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author} </p>
                    <div>{blog.body} </div>
                    <button onClick={handleDelete} >Delete Blog</button>
                </article>



            )}
        </div>
    )
}

export default BlogDetails
