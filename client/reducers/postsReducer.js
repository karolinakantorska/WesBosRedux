export default function posts(state=[], action) {
    switch(action.type){
        case 'INCREMENT_LIKES' :
            console.log('incrementing likes');
            const index = action.index;
            return [
                ...state.slice(0, index), // before the one that we are updating
                {...state[index], likes: state[index].likes + 1},
                ...state.slice(index + 1), // after the one that we are updating
            ]
        default:
            return state;

    }
    return state;
}