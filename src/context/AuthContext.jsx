import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [ token, setToken ] = useState(null)
    const [ user, setUser ] = useState(null)

    useEffect(() => {
        const savedToken = localStorage.getItem('token')
        const savedUser = localStorage.getItem('user')
        
        if (savedToken && savedUser) {
            setToken(savedToken)
            setUser(savedUser)
        }
    },[])

    const login = (username, password) => {
        
        if (username === 'admin' && password === '123456') {
            const tokenFalso = 'd56dse52rHFYffsdff565FD'
            setToken(tokenFalso)
            setUser(username)
            localStorage.setItem('token', tokenFalso)
            localStorage.setItem('user', username)

            return true
        }

        return false
    }

    const logout = () => {
        setToken(null)
        setUser(null)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)