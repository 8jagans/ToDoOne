import React, {useState} from 'react'
import axios from 'axios'
import './CreatePost.css'

export default function CreatePost({match}) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    const handleTitle = (e) => {
        const{name, value} = e.target
        if(name==="title")
            setTitle(value)
        if(name==="body")
            setBody(value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`https://gorest.co.in/public/v1/users/${match.params.postid}/posts`,{title:title,body:body},{headers:{
            Authorization : 'Bearer ' + "b4a1e4dcc2404c879e06d038fa6b662577b794713b54a6d3bfbb9a60efc5179b"
        }}).then((res)=>{
            alert("Posted successfully")
            console.log(res)
        }).catch((error)=>{
            console.log(error)
            alert("Posting Failed")
        })
    }

    return (
    <div>
        <div className="Header"> <h1> </h1> </div>   
        <form>   
            <div className="form">
            <h1 className="head"> Create Post </h1>
            <label> Title </label>
            <input type="text" name="title" value={title} onChange={handleTitle} placeholder="Your Title..."/>
            <label> Body </label>
            <textarea type="text" name="body" value={body} onChange={handleTitle} placeholder="Your Body..."/>
            <button type="submit" onClick={(e)=> handleSubmit(e)}> Post </button>
            </div>
        </form>
    </div>
    )
}
