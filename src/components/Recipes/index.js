import React from 'react';
import './Recipes.css'

import FoodList from '../../utils/foodList';

function Recipes(){
    return(
        <div id='recipes'>
            <h2> Our Best Recipes </h2>
            <p>Far far away, behind the word mountains, far from the countries</p>
            <p>Vokalia and Consonantia, there live the blind texts.</p>
            <section className='grid'>
                {FoodList.map((food) =>(
                    <div key={food.id} className='card'>
                        <img src={food.imagem} alt={food.titulo}/>
                        <div className='text'>
                            <h3>{food.titulo}</h3>
                            <button>See Recipe</button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Recipes;