import logo from './logo.svg';
import Header from './component/Header.js';
//import Body from './component/Body.js';
import Loginpage from './component/Loginpage.js';
import { AuthContext } from './auth';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Blogview } from './BlogsView';
import { PrivateRoute } from './component/PrivateRoute';



export default function App() {

//   const [UserEmail ,setUserEmail] = useState(null);
//   const[Usertoken,setUsertoken] = useState(null);
//   const[UserId,setUserId] = useState(null);

// const getEmail = () =>{
//   let data = localStorage.getItem('UserEmail');
//   setUserEmail(data);
  
// }
// const gettoken = ()=>{
//   let data = localStorage.getItem('Usertoken');
//   setUsertoken(data);
// }

// const getUserId = ()=>{
//   let data = localStorage.getItem('UserId');
//   setUserId(data);
// }

// useEffect(() => {
//   getEmail();
//   gettoken();
//   getUserId();

// },[])


const [UserEmail ,setUserEmail]= useState(null);
const [token ,settoken]= useState(null);
const [userId ,setuserId]= useState(null);



const getUserDetailLocalStroage = ()=>{

  let emailData = localStorage.getItem('UserEmail')
  let Authtoken = localStorage.getItem('token')
  let UserId = localStorage.getItem('userId')

  setUserEmail(emailData);
  settoken(Authtoken);
  setuserId(UserId)
}

useEffect (()=>{
  getUserDetailLocalStroage();
},[])


  return (
    <div className="App">
      <AuthContext.Provider
      value = {{
        token,
        UserEmail,
        userId,
        setUserEmail,
        setuserId,
        settoken
      }}>

      
      <Header />

      <hr />
      <Router>
        <Routes>
        <Route exact path ='/' element = { <Loginpage />}/>
        <Route exact path = 'blogs' element= {
        <PrivateRoute>
          <Blogview />
          </PrivateRoute>}/>
        </Routes>
      </Router>
     
      
      </AuthContext.Provider>
   
  
    </div>
  );
}


