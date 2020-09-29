export default ( state, action ) =>
{
    switch( action.type )
    {
        case 'ADD_GAME_TO_GAMELIST':
            return {
                ...state,
                played: state.played.filter( card => card.id !== action.payload.id ),
                gamelist: [ action.payload, ...state.gamelist ]
            }

        case "REMOVE_GAME_FROM_GAMELIST":
            return {
                ...state,
                gamelist: state.gamelist.filter( card => card.id !== action.payload )
            }

        case "ADD_GAME_TO_PLAYED":
            return {
                ...state,
                gamelist: state.gamelist.filter( card => card.id !== action.payload.id ),
                played: [action.payload, ...state.played]
            }

        case "MOVE_TO_GAMELIST":
            return {
                ...state,
                played: state.played.filter( card => card.id !== action.payload.id ),
                gamelist: [action.payload, ...state.gamelist]
            }

        case "REMOVE_FROM_PLAYED":
            return {

                ...state,
                played: state.played.filter( card => card.id !== action.payload )

            }

        default:
            return state;
    }
}