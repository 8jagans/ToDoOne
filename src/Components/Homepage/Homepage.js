import React , {useEffect} from 'react'
import { useHistory } from 'react-router-dom'

export default function Homepage() {
    const history = useHistory();
    useEffect(() => {
        history.push('/users')
    },[])
    return (
         <div> </div>
    )
}
