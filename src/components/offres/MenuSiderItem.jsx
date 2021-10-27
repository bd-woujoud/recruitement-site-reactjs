import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectautheduser } from '../../features/users/userSlice';
import {useRouteMatch} from 'react-router'

const MenuSiderItem = (props) => {

    const TheIcon = props.icon;

    const role = localStorage.getItem('role')// useselector bech na9ra state mi reedux

    let { path, url } = useRouteMatch();

    return (
        <>
            {
                props.roles.includes(role) &&//////////test eli role mta3 l'user eli 3mal login mawjoud fil props tableau roles eli jay mi navitem fel compoment navigation
                <Link to={`${url}${props.url}`}>

                    <div className="sideritem">
                        {props.children}
                        <TheIcon className='sider-icon' {...props} />
                        <h6>{props.text}</h6>
                    </div>
                </Link>}
        </>
    )
}

export default MenuSiderItem
