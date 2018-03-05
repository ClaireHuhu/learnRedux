import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducers';
import App from './containers/App';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

var store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, 
    document.getElementById('root'));

registerServiceWorker();
