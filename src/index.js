import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import Counter from './counter';
import registerServiceWorker from './registerServiceWorker';

var store = createStore(reducer);

function handleAdd () {
    store.dispatch({type:'ADD'});
}

function handleMinus () {
    store.dispatch({type:'MINUS'});
}

var render = () => ReactDOM.render(<Counter value={store.getState().value} handleAdd={handleAdd} handleMinus = {handleMinus}/>, document.getElementById('root'));
render();
store.subscribe(render);
registerServiceWorker();
