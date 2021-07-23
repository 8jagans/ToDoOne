import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import './EachUser.css'

export default function EachUser({ match }) {
    const [single, settodos] = useState({})
    const [posts, setposts] = useState({})
    const history = useHistory()
    useEffect(() => {
        axios.get('https://gorest.co.in/public/v1/users/'+match.params.userid).then((response) => {
            settodos(response.data.data)
        })
        axios.get('https://gorest.co.in/public/v1/posts/'+match.params.userid).then((response) => {
            setposts(response.data.data)
        })
    }, [])
  
   return (
   <div>
        <div className='header'> <h1> </h1> </div>            
        <div className='card' key={single.id}>
            <h3> Name : {single.name} </h3>
            <p> Email : {single.email} </p>
            <p> Gender : {single.gender} </p>
            <p> Status : {single.status} </p>
        </div>
        <div className='postcards' key={posts.id}>
            <h3> {posts.id?posts.title:"No Posts"} </h3>
            <p> {posts.body} </p>
        </div>
        <div className='buttons'> 
            <Link className='button' to={'/createpost/'+match.params.userid}> Create Post </Link>
        </div>
    </div>
    )
}
