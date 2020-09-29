import React, { useContext } from 'react';
import '../Styles/Played.css';

import { GameContext } from '../context/GameContext';

const Played = () => {

    const { played, removeFromPlayed, moveToGameList } = useContext ( GameContext );

    return (
        <div className = "Played">

            <div className = "Played-box">

                <div className = "Played-title">

                    <h1> { played.length === '1' ? 'Game' : "Games"} played : <strong> { played.length } </strong></h1>

                </div>

                    { played.length > 0 ? (

                        <div className = "Played-Card-box">

                            { played.map(( card ) => (

                                <div className = "Played-Card" key = { card.id }>
                                    
                                    <img src = { card.background_image } alt = { card.name } />

                                    <div className = "Played-card-title">

                                        <h3> { card.name } </h3>

                                        
                                        <div className = "Played-Controls">

                                            <button className = "btn-ctrl" onClick = {() => moveToGameList( card ) } >
                                                <i className = "fas fa-reply"></i>
                                            </button>

                                            <button className = "btn-ctrl" onClick = {() => removeFromPlayed( card.id ) } >
                                                <i className = "fas fa-times"></i>
                                            </button>

                                        </div>
                                    
                                    </div>

                                </div>

                                ))
                            }

                        </div>

                        ) : (

                        <div className = "Played-Card-box-nothing">

                            <h1>No games have been played .</h1>

                            <i className = "far fa-grin-beam"></i>

                        </div>

                        )
                    }

            </div>
            
        </div>
    )

}

export default Played;
