import  axios  from 'axios';
import bootstarp from  'bootstrap';
import React,{component, useContext} from 'react';
import {Button,Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import { AuthContext } from '../auth';
import Loginmodal from './Loginmodal';
import RegisterModal from './RegisterModal';

  class Loginpage extends React.Component {
    static contextType = AuthContext;
    constructor(props){
        super(props);
        this.state = {
            isLoginModal:false,
            isRegisterModal:false,
            Name:" ",
            Email:" ",
            Password:" ",
            Gender:" ",
            interest: " ",
            EmailforLogin:" ",
            PasswordforLogin:" ",


        }
    }
    toggleLoginModal = ()=>{
        this.setState({
            isLoginModal : !this.state.isLoginModal
        })
    }
    
    toggleRegisterModal = ()=>{
        this.setState({
            isRegisterModal:!this.state.isRegisterModal
        })

    }


    onValueChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState ({

            [name]:value

        })
        console.log(name,value);
    }

    onRegisterSubmit = async ()=>{
        const interest = this.state.interest.split(',');

        if(!this.state.Name || !this.state.Email || !this.state.Password || !this.state.Gender || !this.state.interest) {
          
             alert("fillthe details");
             return;
        }

        const data = {
            Name:this.state.Name,
            Email:this.state.Email,
            Password:this.state.Password,
            Gender:this.state.Gender,
            interest:interest
    

        } 
       
         const Response = await axios.post("http://localhost:5000/api/users",data);
         console.log("this are the reponse",Response);

         console.log(JSON.stringify(this.state));


          this.toggleRegisterModal();

          
    }
    onLoginSubmit = async()=>{
            

        const data = {
            Email:this.state.EmailforLogin,
            Password:this.state.PasswordforLogin,
            
        }
        if(!this.state.EmailforLogin || !this.state.PasswordforLogin){
             alert ("fill the details");
        }

        try{
            const response = await axios.post("http://localhost:5000/api/login",data);
            alert("login successful");
            console.log(response);
            localStorage.setItem("UserEmail",response.data.UserEmail);
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("userId",response.data.userId);
            localStorage.setItem("interest",response.data.interest)
            this.context.settoken(response.data.token);
            this.context.setUserEmail(response.data.Email);
            this.context.setuserId(response.data.userId);
            //localStorage.setItem("token",response.message.token);
            //localStorage.setItem("userId",response.message.userId); 


            return this.toggleLoginModal();
            
            
        }
        catch(err){
            console.log( "error occuring while find local storage",err);
            alert("error featching on sever");
           
        }

       
    }


    render(){
        return(<>
            
            <div className='container'>
                <div className='row'>
                    <div className='col-6' style={{
                        paddingTop:'10%'
                    }}><a href='wwww.google.com'>
                        <img alt = " images " src='../images/loginimage.svg'  width="100%"/>
                    </a>

                    </div>

                    <div className='col-6 ' style={
                    {padding:"10%",
                    marginRight:"0px"}}>
                    <h2> login / register the Blog </h2>
                    <Button style={{marginRight:"10px",
                    
                backgroundColor:'red'}} onClick={this.toggleLoginModal}> login </Button>
                    <Button style={{backgroundColor:"blue"}} onClick={this.toggleRegisterModal}>Register </Button>

                </div>
                
                </div>
                
            </div>
            <Loginmodal isLoginModal  = {this.state.isLoginModal} toggleLoginModal={this.toggleLoginModal}  onValueChange = {this.onValueChange}  onLoginSubmit = {this.onLoginSubmit}/>
            <RegisterModal isRegisterModal = {this.state.isRegisterModal} toggleRegisterModal = {this.toggleRegisterModal}  onValueChange = {this.onValueChange} onRegisterSubmit = {this.onRegisterSubmit}/>
            </>
            
            
        )
    }
    
    
}  export default Loginpage