import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';
import { selectautheduser, selectisauth } from '../features/users/userSlice';

function PublicRoute({ component: Component, restricted, ...rest }) {

    const isauth = localStorage.getItem('isauth')
    const role = localStorage.getItem('role')
    return (
        <Route {...rest} render={props => (
            
            isauth && restricted ?
                <Redirect to={

                    role === 'entreprise' && '/entreprise'
                    ||
                    role === 'admin' && '/admin'
                    ||
                    role === 'condidat' && '/condidat'
                    ||
                    role && '/'
                } />
                : <Component {...props} /> ///////// ?????
        )} />
        
    )
}

export default PublicRoute