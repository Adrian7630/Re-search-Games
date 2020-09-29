import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer';

// initial state

const initialState = 
{
    gamelist: localStorage.getItem('gamelist') ? JSON.parse(localStorage.getItem("gamelist")) : [],
    played: localStorage.getItem('played') ? JSON.parse(localStorage.getItem("played")) : [],
};


//create Context 

export const GameContext = createContext( initialState );

//provider components

export const GameProvider = ( props ) =>
{
    const [state, dispatch] = useReducer( AppReducer, initialState );

    useEffect( () => {

        localStorage.setItem('gamelist', JSON.stringify(state.gamelist));
        localStorage.setItem('played', JSON.stringify(state.played));

    }, [ state ]);

    // ACTIONS 

    const addGameToGameList = ( game ) =>
    {
        dispatch( { type: "ADD_GAME_TO_GAMELIST", payload: game } );
    }

    const removeGameFromGameList = ( id ) => {

        dispatch( { type: "REMOVE_GAME_FROM_GAMELIST", payload: id } );

    };

    const addGameToPlayed = ( game ) => {

        dispatch( { type: "ADD_GAME_TO_PLAYED", payload: game } );

    }

    const moveToGameList = ( game ) =>
    {
        dispatch( { type: "MOVE_TO_GAMELIST", payload: game } );
    }

    // remove from played

    const removeFromPlayed = ( id ) => 
    {
        dispatch( { type: "REMOVE_FROM_PLAYED", payload: id } );
    }

    return (

        <GameContext.Provider value = 
        { { 
            gamelist: state.gamelist, 
            played: state.played,
            addGameToGameList,
            removeGameFromGameList,
            addGameToPlayed,
            moveToGameList,
            removeFromPlayed
        } }>
            { props.children }
        </GameContext.Provider>
    )
};