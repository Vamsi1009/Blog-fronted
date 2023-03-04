import react from 'react'
import {Navbar,NavbarBrand} from 'reactstrap';
import './Style/Style.css';

export default function Header () {
    return (
        <>
        
        <Navbar
         className="nav"
         color= "secondary"
         
         dark
              >
         <NavbarBrand href="/">
            Reactstrap
          </NavbarBrand>
         
       </Navbar>
      
      
        </>
    );
}