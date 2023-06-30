import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {fontAwesome} from "./fontAwesome.jsx"; //Awesome auto import function
import {RouterProvider} from 'react-router-dom'
import {router} from './router/router.jsx';
import {ContextProvider} from "./context/ContextProvider.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <ContextProvider>
            <RouterProvider router={router}/>
        </ContextProvider>
    </React.Fragment>,
)