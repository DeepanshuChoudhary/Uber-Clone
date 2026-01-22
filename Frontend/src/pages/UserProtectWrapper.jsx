import React, { useContext, useEffect }from 'react'
import { UserDataContent } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({ children }) => {
    
    // const { user } = useContext(UserDataContent)
    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) {
            navigate('/user/login')
        }
    }, [token])
    
    return (
        <>
            { children }
        </>
    )
}

export default UserProtectWrapper