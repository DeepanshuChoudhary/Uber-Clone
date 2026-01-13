import React, { createContext, useState } from 'react'

export const UserDataContent = createContext();

const userContext = ({ children }) => {

    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName:'',
            lastName:''
        }
    })

    return (
        <div>
            <UserDataContent.Provider value={[user, setUser]}>
                {children}
            </UserDataContent.Provider>
        </div>
    )
}

export default userContext