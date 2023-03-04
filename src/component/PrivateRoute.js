import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import { AuthContext } from "../auth";


export{PrivateRoute}
function PrivateRoute({children}){
   const userdata = useContext(AuthContext);
    const userinfo = localStorage.getItem("token");
   console.log(userdata);


    console.log("token are verifired",userinfo)
   // console.log(userdata);
    if(!userinfo){
        //res.redirect('/blogs');
        return <Navigate to= "/" /> 
        
    }
    // if (!userdata.useContext){
    //     return <Navigate to='/' />
        
    // }
    

    return children;
}