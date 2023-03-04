import react from 'react'
import {Navbar,NavbarBrand} from 'reactstrap';
import  Style from './Style/Style.css';


export default function Header () {
    return (
        <>
        
        <Navbar
         //className="Navbar"
        // color= "secondary"
         
         //dark
         style={{
            background:"rgba(216, 196, 1, 0.553)",
           margin:"5px"
         }}
              >
         <NavbarBrand href="/">
            blogrestro
          </NavbarBrand>
         
       </Navbar>
      
      
        </>
    );
}