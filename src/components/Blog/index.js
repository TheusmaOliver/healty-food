import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Blog.css';
import BlogList from '../../utils/blogList';

function Blog(){
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 3,
        speed: 500,
        
      };
    return (
        <div id="blog">
            <h2>Read Our Blog</h2>
            <p>Far far away, behind the word mountains, far from the countries</p>
            <p>Vokalia and Consonantia, there live the blind texts.</p>

            <Slider {...settings}>
                {BlogList.map((item) =>(
                    <div className='cards' >

                            <div key={item.id} className='card-wraper'>

                                <img className='imagem-blog' src={item.imagemBlog} alt={item.titulo}/>
                                <div className='info'>
                                    <h3>{item.titulo}</h3>
                                    <div className='social'>
                                        <img className='imagem-perfil' src={item.imagemPerfil} alt={item.nome}/>
                                        <span>{item.nome}</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                ))}
                
            </Slider>
      </div>
    );
}

export default Blog;