import './Header.css';
import {  Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


function Header() {

  const toggle =()=>{
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
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
          <nav id="nav">
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
