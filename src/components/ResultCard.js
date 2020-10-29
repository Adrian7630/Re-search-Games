import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import '../Styles/Results.css';

const ResultCard = ( { game } ) => {

    const { addGameToGameList, gamelist, played, addGameToPlayed } = useContext( GameContext );

    const cutie = game.parent_platforms ? game.parent_platforms : [] ;

    let storedGame = gamelist.find( elem => elem.id === game.id);

    let storedPlayed = played.find( elem => elem.id === game.id);

    const playedlistDisabled = storedPlayed ? true : false;

    const gamelistDisabled = storedGame ? true : false;

    return (

        <div className = "result-card">

            <div className = "poster-wrapper">

                <img src = { game.background_image } alt = { game.name } />

            </div>

            <div className = "info">

                <div className = "info-box">

                    <div className = "title">
                        <h3>{ game.name }</h3>
                        <h3><strong>{ game.metacritic }</strong></h3>
                    </div>

                    <div className = "box-title">
                        <h4>Platform: </h4>
                        <h4>
                            {
                            
                                cutie.map( ( child, index ) => (
                                <span key = { index } >{ child.platform.name }</span>   
                            ))
                                
                            }
                        </h4>
                    </div>

                    <div className = "box-title">

                        <h4 > Release Date:</h4>
                        <h4> { game.released } </h4>

                    </div>

                    <div className = "box-title">

                        <h4>Genres: </h4>
                        <h4>{game.genres.map( ( x, index ) => (<span key = { index }> { x.name } </span>))}</h4>

                    </div>

                </div>

                <div className = "Controls">

                    <button 
                        className = "btn" 
                        type="button"
                        disabled = { gamelistDisabled }
                        onClick = { () => addGameToGameList( game ) }
                    >
                        Add to Game List
                    </button>

                    <button 
                        className = "btn" 
                        type="button"
                        disabled = { playedlistDisabled }
                        onClick = { () => addGameToPlayed ( game ) }
                    >
                        Add to Played
                    </button>

                </div>

            </div>
            
        </div>
    )
}

export default ResultCard
