import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Articles() {

const [henBlogs, setHenBlogs] = useState();

const fetchHenBlogs = () => {
axios.get('https://bakedbyartapi.herokuapp.com/henblogs')
.then( results => setHenBlogs(results.data))
.catch(err => console.log(err))
}

useEffect( () => {
fetchHenBlogs();
},[]);

return (
<div className="articles-page">

    <div className="about-header">
        <Link className="ben-link"
        to="/"><i className="fas fa-chevron-left"></i> Back</Link>

        <div>
        </div>
    </div>
    {
    henBlogs === undefined ? <h1>Loading ... </h1> : !henBlogs.length ? <h1 className="h-empty">NO POST AT THE MOMENT</h1> :
    henBlogs.map( blog => (
    <div className="hen-blogbx" key={blog._id}>
        <h2 className="h-b-htwo">{blog.title}</h2>
        <p className="h-b-posted"><i>Published</i> <span className="h-b-span">{new Date(blog.datecreated).toLocaleDateString('en-us', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
        })}</span> </p>
        <p className="h-b-pone">{blog.content}</p>

        {blog.titletwo ? <p className="h-b-ttletwo">{blog.titletwo}</p>: <></>}
        {blog.contenttwo ? <p className="h-b-cnttwo">{blog.contenttwo}</p>: <></>}


    </div>
    ))
    }
</div>
)
}
