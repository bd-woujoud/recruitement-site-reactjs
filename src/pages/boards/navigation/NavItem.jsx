import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectautheduser } from '../../../features/users/userSlice';

const NavItem = (props) => {

    const TheIcon = props.icon;

    const role = localStorage.getItem('role')

    return (
        <>
            {
                props.roles.includes(role) &&//////////test eli role mta3 l'user eli 3mal login mawjoud fil props tableau roles eli jay mi navitem fel compoment navigation
                <Link to={`/${props.url}`}>

                    <div className="navigationitem">
                        {props.children}
                        <TheIcon className='navitem-icon' {...props} />
                        <span>{props.text}</span>
                    </div>
                </Link>}
        </>

    )
}

export default NavItem
