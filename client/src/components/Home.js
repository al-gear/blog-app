import React from 'react'
import useFetch from '../useFetch'
import BlogList from './BlogList'


const Home = () => {

    const { data: blogs, isPending, error } = useFetch("http://localhost:5000/blogs")




    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}


        </div>
    )
}

export default Home
