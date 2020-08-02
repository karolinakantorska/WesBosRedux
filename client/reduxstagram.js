// let's go!
import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import App from './components/App';
import Single from './components/Single';
import Photogrid from './components/Photogrid';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './Store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Photogrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.querySelector('#root'));
