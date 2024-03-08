import React, { createContext, useState } from "react";
export const userContext = createContext();
function UserComponent({ children }) {
    const [user, setUser] = useState({ name: 'hari' })
    return (
        <>

            <div>
                <userContext.Provider value={user}>
                    <div>{children}</div>
                </userContext.Provider>
            </div></>
    )
}
export default UserComponent