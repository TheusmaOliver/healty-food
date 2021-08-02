import React from 'react';
import './SearchRecipes.css'
import SearchIcon from '@material-ui/icons/Search';

function SearchRecipes(){
    return(
        <div className='search-recipe'>
            
            <div className='texto'>
                <p>Ready for Trying a new recipe?</p>
            </div>
            <div className='search'>
                <input type='search' placeholder='Search healthy recipes' ></input>
                <button><SearchIcon className='icon-search'/></button>
            </div>
      </div>
    );
}

export default SearchRecipes;