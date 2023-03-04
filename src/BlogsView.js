import React,{Component} from 'react';
import axios  from 'axios';
//import Blogpage from './Blogpage';
//import { Button } from 'reactstrap';
import { BlogInsert } from './component/BlogInsert';

export class Blogview extends React.Component{
    constructor(props){
        super(props);
    
    this.state = {
            userinterest:" ",
            blogviews:' '

    }}
    // this.state = {
    //   isToggleBlog:false,
    //     title:' ',
    //     tag:' ',
    //     content:' ',
    //     CreatedBy:' ',
    // }
    // }







    componentDidMount = async () =>{
        const interests = localStorage.getItem('interest');
        const Token = localStorage.getItem('token');
        const usersinterest = interests.split(',');
        //this.setState({
          //  userinterest: usersinterest,
            

        //})
        const data =  {
            interests: usersinterest,
        }

        const headers = {
            Authorization: Token,

        }

        console.log("All users interest",usersinterest);

        try{
        
        const response = await axios.post('http://localhost:5000/getinterests',data,{
                headers:headers,

            });
            
            console.log("api blog get suceess full",response);

        }
        catch(err){
            console.log("error while connecting the Apis", err);
        }
    }



    // toggleBlogDetail = () =>{
    //     this.setState({
    //         isToggleBlog :!this.state.isToggleBlog

    //     })
    // }

    // BlogsCreateSubmit = async()=>{

    //     const  blogsId = localStorage.getItem('userId');
    //     const blogsheaders = localStorage.getItem('token');
    //     const headerrs ={
    //         Authorization:blogsheaders
    //     }
    //     const data1 = {
    //         title:this.state.title,
    //         tag:this.state.tag,
    //         content:this.state.content,
    //         CreatedBy:blogsId
            
    //     }
    //     try{
        
    //     const blogs = await axios.post("http://localhost:5000/api/bloguser",data1,{
    //         headers:headerrs
    //     })
    //     console.log(JSON.stringify(this.state));
    //     console.log( "login blog api is sucessfull",blogs);
    //     this.isToggleBlog();
    // }
    // catch(err){
    //     console.log("error in bloginsert details in blogsview",err);
    // }

    // }

    

    render(){
        return(
            <>
            {/* <div className='container'>
                <div className='row'>

                    <div className='col-6 ' style={
                    {padding:"10%",
                    marginRight:"0px"}}>
                    <h2> Bloglogin </h2>
                    <Button style={{marginRight:"10px",
                    
                backgroundColor:'red'}} onClick={this.toggleBlogDetail}>BlogInsert</Button>
                    

                </div>
                
                </div>
                
            </div>
                    <Blogpage  isToggleBlog = {this.state.isToggleBlog} toggleBlogDetail = {this.toggleBlogDetail} BlogsCreateSubmit = {this.BlogsCreateSubmit} /> */}

               <BlogInsert />
            
            </>
        )
    }
}




