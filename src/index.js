import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import axios from 'axios'
import thunk from 'redux-thunk';
import reducer from './reducer';
import Counter from './counter';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

var store = createStore(reducer);

ReactDOM.render(<Provider store={store}><Counter/></Provider>, 
    document.getElementById('root'));

registerServiceWorker();
