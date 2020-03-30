import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'

const instance = createInstance({
    urlBase: "https://stats.locall-map.de",
    siteId: 1, // optional, default value: `1`
});

ReactDOM.render(
    <MatomoProvider value={instance}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </MatomoProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
