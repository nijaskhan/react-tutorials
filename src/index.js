import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reduxStore from './reduxStore';


const htmlRoot = document.getElementById('root');
const root = ReactDOM.createRoot(htmlRoot);
root.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>
);
