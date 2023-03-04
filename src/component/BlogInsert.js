import {Component} from 'react';
import { Button } from 'reactstrap';
import Blogpage from '../Blogpage';
import axios from 'axios';

export class BlogInsert extends Component{
    constructor(props){
        super(props);
        this.state ={
            isToggleBlog:false,
            title:'',
            tag:'',
            content:'',
            CreatedBy:'',

        }


    }

    toggleBlogDetail = () =>{
        this.setState({
            isToggleBlog :!this.state.isToggleBlog

        })
    }
    onValueChange = (event)=> {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })
        console.log(name,value);
    }
    



    BlogsCreateSubmit = async()=>{

        const  blogsId = localStorage.getItem('userId')
       const blogsheaders = localStorage.getItem('token')
        //console.log("this is vamsikrishna token",blogsheaders);
        const headerrs = {
             Authorization:blogsheaders
          }
         console.log(headerrs);
        const data1 = {
            title:this.state.title,
            tag:this.state.tag,
            content:this.state.content,
            CreatedBy:blogsId
            
        }
        console.log(data1);
        
        const blogs = await axios.post("http://localhost:5000/api/bloguser",data1,{
             headers:headerrs
        })
        
        console.log( "login blog api is sucessfull",blogs);
        this.toggleBlogDetail();
    }
    

    render(){
        return(
            <>
            <div className='container'>
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
            <Blogpage  isToggleBlog = {this.state.isToggleBlog} toggleBlogDetail = {this.toggleBlogDetail} BlogsCreateSubmit = {this.BlogsCreateSubmit} onValueChange = {this.onValueChange}/>
            </>
            )
        }

}