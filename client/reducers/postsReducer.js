export default function posts(state=[], action) {
    switch(action.type){
        case 'INCREMENT_LIKES' :
            console.log('incrementing likes');
            const i = action.index;
            return [
                ...state.slice(0, i), // before the one that we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1), // after the one that we are updating
            ]
        default:
            return state;

    }
    return state;
}