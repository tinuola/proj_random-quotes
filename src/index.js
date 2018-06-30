import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuotesApp from './components/QuotesApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<QuotesApp />, document.getElementById('root'));
registerServiceWorker();
