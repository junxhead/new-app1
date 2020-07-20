import React, {useState, Fragment} from 'react'
import { faHome,faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Link, Route} from "react-router-dom"
import Home from '../../container/pages/Home';
import Login from '../../container/pages/Login';
import Register from '../../container/pages/Register';
import './navbar.scss'

// import { Alert } from 'reactstrap'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText

  } from 'reactstrap'

  const NavbarComp = ()=>{
       
        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);
        return (
            <Router>
                
                <Fragment>
                <div className="Navbar" >
                <Navbar color="light" light expand="md" >
                <NavbarBrand><FontAwesomeIcon icon={faHome} /> <Link to="/">Home</Link></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar  >
                    
                    <Nav className="mr-auto" navbar>
                        
                    <NavItem>
                        <NavLink className="link"><Link to="/profil">Profile</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="link"><Link to="/profil">About</Link></NavLink>
                    </NavItem>
                    
                    </Nav>
                    <NavbarText>
                    <Nav>
                        <NavItem>
                            <NavLink className="link"><FontAwesomeIcon icon={faSignInAlt} /> <Link to="/login">Login</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="link"><Link to="/register"> Register</Link></NavLink>
                        </NavItem>
                    </Nav>
                    </NavbarText>
                    {/* <Nav>
                        
                       
                    </Nav> */}
                </Collapse>
                </Navbar>
                </div>
         
          </Fragment>
          <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
            </Router>
              
      );
          
    }
export default NavbarComp
