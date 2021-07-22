import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


export default function EachUser({ match }) {
    
    const [single, settodos] = useState({})
    const [posts, setposts] = useState({})
    const history = useHistory()
    useEffect(() => {
        axios.get('https://gorest.co.in/public/v1/users/'+match.params.userid).then((response) => {
            settodos(response.data.data)
        })
        axios.get('https://gorest.co.in/public/v1/posts/'+match.params.userid).then((response) => {
            console.log(response.data)
            setposts(response.data.data)
        })
    }, [])

    
    
      
        
   return (
       <div>
        <div className='cards' key={single.id}>
            <h3> {single.name} </h3>
            <h4> {single.email} </h4>
            <h4> {single.gender} </h4>

        </div>
        <div className='cards' key={posts.userid}>
        <h3> {posts.title} </h3>
        <h4> {posts.body} </h4>

    </div>
    </div>
        )

}
