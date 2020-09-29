import React, { useState, useEffect } from 'react';
import ResultCard from '../components/ResultCard';
import axios from 'axios';

import '../Styles/Add.css';

const Add = () => {

    const [query, setQuery] = useState('');
    const [box, setBox] = useState([]);

    useEffect ( () => {

        const fetchGames = async () => {
    
          const  info = await axios(`https://api.rawg.io/api/games?page_size=11&search=${ query }`).catch(err =>{console.log(err);})
    
          const games = info.data;

          setBox( games.results );
    
        }
    
        fetchGames()

        
    
      }, [ query ]) 

      const WriteName = ( e ) => {
  
          setQuery( e.target.value )
  
      }

    return (

        <div className = "add-page">

            <div className = "container">

                <div className = "input-wrapper">

                    <input 
                        type = "text"
                        placeholder = "Search for a game "
                        value = { query }
                        onChange = { WriteName }
                    />

                </div>

                <div className = "Results-Content">

                    <div className = "Results">

                        { box.map( item => (

                            <ul className = "Results-box" key = { item.id }>

                                <li> 

                                    <ResultCard game = { item } />

                                </li>
                            </ul>

                        ))}

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Add;
