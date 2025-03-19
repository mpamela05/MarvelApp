import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { IdentitetiRoutes, HerojiRoutes, TimoviRoutes, HOME } from '../constants';
import Logo from "../assets/Marvel_Logo.svg.png"



export default function NavBar(){

    const navigate = useNavigate();


    return(
        <>
          <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={()=>navigate(HOME)}> <img src={Logo} className="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Identiteti" id="basic-nav-dropdown">
                        <NavDropdown.Item
                        onClick={()=>navigate(IdentitetiRoutes.Identitet_pregled)}
                        >Pregled</NavDropdown.Item>
                        <NavDropdown.Item
                        onClick={()=>navigate(IdentitetiRoutes.Identitet_dodaj)}
                        >Dodaj</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Heroji" id="basic-nav-dropdown">
                        <NavDropdown.Item
                        onClick={()=>navigate(HerojiRoutes.Heroj_pregled)}
                        >Pregled</NavDropdown.Item>
                        <NavDropdown.Item
                        onClick={()=>navigate(HerojiRoutes.Heroj_dodaj)}
                        >Dodaj</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Timovi" id="basic-nav-dropdown">
                        <NavDropdown.Item
                        onClick={()=>navigate(TimoviRoutes.Tim_pregled)}
                        >Pregled</NavDropdown.Item>
                        <NavDropdown.Item
                        onClick={()=>navigate(TimoviRoutes.Tim_dodaj)}
                        >Dodaj</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </>
    )
}