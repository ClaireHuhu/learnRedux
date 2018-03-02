import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import axios from 'axios'
import thunk from 'redux-thunk';
import reducer from './reducer';
import Counter from './counter';
import registerServiceWorker from './registerServiceWorker';

var store = createStore(reducer,applyMiddleware(thunk));

function handleAdd () {
    store.dispatch({type:'ADD'});
}

function handleMinus () {
    store.dispatch({type:'MINUS'});
}

function fetch () {
    store.dispatch({type:'START'});
    return axios.get('')
        .then(function(response){
           store.dispatch({type:'GETTED'})
        })
        .catch(function(err){
           store.dispatch({type:'GETTED'})
        });

}
var render = () => ReactDOM.render(<Counter value={store.getState().value} state={store.getState().state} fetch={fetch} handleAdd={handleAdd} handleMinus = {handleMinus}/>, 
    document.getElementById('root'));
render();
store.subscribe(render);
registerServiceWorker();
