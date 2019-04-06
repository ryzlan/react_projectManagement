import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware,compose } from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './store/reducer/rootReducer';
import thunk from 'redux-thunk'
import {reduxFirestore,  getFirestore} from 'redux-firestore';
import {reactReduxFirebase ,getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig';

const store = createStore(rootReducer , compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
        useFirestoreForProfile:true, //use the profile attribute in firebase reducer
        userProfile:'users' , // which collection to add to profile 
        attachAuthIsReady :true}),
    )
);

// to stop flicker by waiting on rendering until firebase is ready

// store.attachAuthIsReady().then(() =>{
//     ReactDOM.render(
//     <Provider store={store}><App /></Provider>,
//     document.getElementById('root') );
// })

 ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root') );



serviceWorker.unregister();
