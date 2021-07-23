import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { MdEmail } from "react-icons/md";
import { MdInput} from "react-icons/md";
import './AllUsers.css';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

export default function All_user() {
    const [todos, settodos] = useState([])
    const history = useHistory()
    useEffect(() => {
        axios.get('https://gorest.co.in/public/v1/users').then((response) => {
            settodos(response.data.data)
        })}, [])

    return (
    <div>
    <div className="pages">
        <div className="header"> <h1> </h1> </div>
    <div>
        <p class="para">
        Click <a className="a1"> <MdEmail/> </a> to Mail Them , Click <a className="a1"> <MdInput/> </a> to View Details
        </p> 
    </div>
    {
        todos.map((each) => {
        return (
            <div  className='cards' key={each.id}>
            <h3> {each.name}
                <a className="arrow" onClick={() => history.push(`/users/${each.id}`)}> <MdInput/> </a>
                <a class="arrow1"  href={`mailto: ${each.email}`}> <MdEmail/> </a>  
            </h3>
            </div>
        ) }) } 
        </div> 
    </div>
    )
}
