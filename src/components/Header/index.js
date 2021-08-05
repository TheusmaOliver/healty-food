import './Header.css';
import {  Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Header() {
  const [active,setActive] = useState(false)

  const toggle =()=>{
    setActive(!active)
  }

  return (
    <header>

      <Row>
        <Col><h1>Healthy Food</h1></Col>
        <Col >
          <div className='botao'>
            <button id="btn-mobile" onClick={toggle} >
              
              <span id="hamburguer"></span>
            </button>
            
          </div>
          <nav id="nav" className={ active ? 'active' : ''}>
            <ul id="menu">
              <li><a href='#recipes'>HEALTHY RECIPES</a></li>
              <li><a href='#blog'>BLOG</a></li>
              <li><a href='#join'>JOIN</a></li>
              <li id='register'  ><Link className='link-register' to='/register' >REGISTER</Link> </li>
            </ul>
          </nav>
        </Col>
      </Row>
     
      
    </header>
  );
}

export default Header;
