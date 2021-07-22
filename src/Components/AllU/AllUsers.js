import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './AllUsers.css'


export default function All_user() {

    const [todos, settodos] = useState([])
    const history = useHistory()
    useEffect(() => {
        axios.get('https://gorest.co.in/public/v1/users').then((response) => {
            settodos(response.data.data)
        })
    }, [])

    return (
        <div>
            <div className="Header"> <h1> ToDoOne </h1> </div>            
            {
            todos.map((each) => {
            return (
                <div onClick={() => history.push(`/user/${each.id}`)} className='cards' key={each.id}>
                    <h3> {each.name} </h3>
                    <h4> {each.email} </h4>
                </div>
                )
            })
        }
        </div>
    )
}
