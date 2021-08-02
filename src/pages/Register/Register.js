import React from 'react';
import FormRegister from '../../components/FormRegister/index';
import './Register.css';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

function Register(){
    return(
        <div className='page-register'>
            <Container>
                <h1><Link to='/'>Healthy Food</Link></h1>
            </Container>
            <FormRegister/>
            <div className='bloco-footer'>

                <Container>
                    <Footer />
                </Container>
            </div>
        </div>

    )
}

export default Register;