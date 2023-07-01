import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {fontAwesome} from "./fontAwesome.jsx"; //Awesome auto import function
import 'react-loading-skeleton/dist/skeleton.css'
import {RouterProvider} from 'react-router-dom'
import Router from './router/router.jsx';
import {ContextProvider} from "./context/ContextProvider.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <ContextProvider>
            <RouterProvider router={Router}/>
        </ContextProvider>
    </React.Fragment>,
)