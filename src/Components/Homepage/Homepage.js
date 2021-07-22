import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css';

export default function Homepage() {
    return (
        <div className="links">
            <Link to='/users'> ToDoOne </Link>
        </div>
    )
}
