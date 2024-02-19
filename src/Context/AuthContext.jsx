import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router";

const authContext = createContext()

const AuthContextProvider = function({children}){
    const navigate = useNavigate()
     const [user,setUser] = useState(null)
     const [isAuthenticated,setisAuthenticated] = useState(false)

     useEffect(()=>{
        if(localStorage.getItem('token')){
            setisAuthenticated(true)
        }
     },[isAuthenticated])

     const login = (userdata) =>{
        setUser(userdata.user)
        setisAuthenticated(true)
        navigate('/Admin')
     }

     const logOut = ()=>{
        localStorage.removeItem('token')
        setUser(null)
        setisAuthenticated(false)
        navigate('/login')
     }


     const value = {
        user ,  isAuthenticated , login , logOut
     }

     return(
        <authContext.Provider value={value} >
            {children }
        </authContext.Provider>
     )
}

export const useAuth = ()=>{
    return useContext(authContext)
}

export default AuthContextProvider