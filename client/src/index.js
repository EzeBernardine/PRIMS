import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router/Router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
