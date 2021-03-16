import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function AddArticles() {

const [state, setState] = useState({
title: '',
content: '',
titletwo: '',
contenttwo: '',
author: ''
})

const onChangeState = e => {
const {name, value} = e.target;
setState({...state, [name]: value})
}

const submitState = () => {
axios.post('https://bakedbyartapi.herokuapp.com/henblogs/add', state)
.then( () => {
alert('henry blog has been posted');
window.location.reload();
}).catch(err => console.log(err))
}

const showAddContent = (e) => {
e.preventDefault()
let hidden = window.document.querySelector('.a-a-hide');
let btn = window.document.querySelector('.a-a-add');
hidden.style.display="block"
btn.style.display="none"
}

return (
<div className="add-article-page">
    <div className="about-header">
        <Link className="ben-link"
        to="/"><i className="fas fa-chevron-left"></i> Back</Link>

        <div>
        </div>
    </div>
    <div className="add-article-form">

        <div className="a-a-div">
        <input type="text" name="title" placeholder="Enter Title"
        value={state.title} onChange={onChangeState} className="a-a-inp" />
        </div>

        <div className="a-a-div">
        <input type="text" name="author" placeholder="Author Name"
        value={state.author} onChange={onChangeState} className="a-a-inp" />
        </div>

        <div className="a-a-div">
        <textarea cols="30" rows="10" name="content" placeholder="Enter Content"
        value={state.content} onChange={onChangeState} className="a-a-inp" />
        </div>

        <button onClick={ showAddContent  }
         className="a-a-add">ADD MORE CONTENT</button>

        <div className="a-a-hide">
        <div className="a-a-div">
        <input type="text" name="titletwo" placeholder="Enter Second Title"
        value={state.titletwo} onChange={onChangeState} className="a-a-inp" />
        </div>

        <div className="a-a-div">
        <textarea cols="30" rows="10" name="contenttwo" placeholder="Enter Second Content"
        value={state.contenttwo} onChange={onChangeState} className="a-a-inp" />
        </div>
        </div>

        <button onClick={submitState} className="a-a-sub">POST BLOG</button>

    </div>
</div>
)
}
