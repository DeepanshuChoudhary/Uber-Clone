import React, { createContext, useState } from "react";

export const UserDataContent = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        email: "",
        fullName: {
            firstName: "",
            lastName: "",
        },
    });

    return (
        <UserDataContent.Provider value={{ user, setUser }}>
            {children}
        </UserDataContent.Provider>
    );
};

export default UserContext;
