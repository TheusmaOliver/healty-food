import React from 'react';
import './Join.css';
import BlocoFinal from '../../assets/img/bloco_final_image.svg';

function Join(){
    return(
        <div id='join'>
            <div className='container-join'>
                <div className='bloco-email'>
                    <h2>Join our membership to get special offer</h2>
                    <div className='getEmail'>
                        <input type='email' placeholder='Enter your email addres' ></input>
                        <button>Join</button>
                    </div>
                </div>

                <img src={BlocoFinal} alt='imagem final'/>
                
            </div>

        </div>
    );
}

export default Join;