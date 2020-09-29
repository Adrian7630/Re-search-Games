import React, { useContext } from 'react';
import '../Styles/Gamelist.css';

import { GameContext } from '../context/GameContext';

const PlayedList = () => {

    const { gamelist, removeGameFromGameList, addGameToPlayed } = useContext ( GameContext );



    return (

        <div className = "Gamelist">

            <div className = "Gamelist-box">

                <div className = "Gamelist-title">

                    <h1> My Gaming List </h1>

                    <span className = "Gamelist-Counter">
                    { gamelist.length === '1' ? ' Game: ' : ' Games: '} <strong>{ gamelist.length } </strong>  
                    </span>

                </div>

                { gamelist.length > 0 ? (

                    <div className = "Gamelist-Card-box">

                    { gamelist.map( ( item ) => (

                        <div className = "Gamelist-Card" key = { item.id }>
                            
                            <img src = { item.background_image } alt = { item.name } />

                            <div className = "Gamelist-card-title">

                                <h3> { item.name } </h3>

                                <div className = "Gamelist-Controls">

                                    <button className = "btn-ctrl" onClick = {() => addGameToPlayed( item ) }>
                                            <i className = "fas fa-gamepad"></i>
                                    </button>

                                    <button className = "btn-ctrl" onClick = {() => removeGameFromGameList( item.id ) }>
                                        <i className = "fas fa-times"></i>
                                    </button>
                                
                                </div>
                            
                            </div>

                        </div>

                    ))
                    }

                    </div>

                ) : (

                    <div className = "Gamelist-Card-box-nothing">

                        <h1>There are no games in the list !</h1>

                        <i className = "far fa-grin-beam"></i>

                    </div>

                )}


            </div>

        </div>
    )
}

export default PlayedList;
