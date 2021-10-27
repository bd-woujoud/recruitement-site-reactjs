import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectautheduser, selectisauth } from '../features/users/userSlice';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {

    const isauth = localStorage.getItem('isauth')
    const role = localStorage.getItem('role')

    return (
        <Route {...rest} render={props => {
            if (!isauth)
                return <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />

            if (!roles.includes(role))

                return <Redirect to={{
                    pathname: '/',
                    state: { from: props.location } //////// ????
                }} />
            return <Component {...props} />    ////// ????
        }} />
    )
}

export default PrivateRoute;