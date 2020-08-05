import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/rootReducer';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = { 
posts,
comments
};
// redux devTools
// if there is no window.devToolsExtension return the store itself
const enchancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);
const store = createStore(rootReducer, defaultState, enchancers);

export const history = syncHistoryWithStore(browserHistory, store);

// hot reload reducer
if (module.hot) {
    module.hot.accept('./reducers/rootReducer.js', () => {
        const nextRootReducer = require('./reducers/rootReducer').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;