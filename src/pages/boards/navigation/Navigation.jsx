import React from 'react'
import '../../../assets/css/navigation.css'
import { MdWork } from 'react-icons/md'
import { ImUserTie } from 'react-icons/im'
import { RiSettings2Fill } from 'react-icons/ri'
import NavItem from './NavItem'
import { useSelector } from 'react-redux'
import { selectautheduser } from '../../../features/users/userSlice'

const Navigation = (props) => {

    return (
        <div class='navigation  '  >

            {props.children}

            < NavItem roles={['admin', 'entreprise', 'condidat']} {...props} url='offres' icon={MdWork} text='Offres' />
            < NavItem roles={['admin', 'entreprise', 'condidat']} {...props} url='profile' icon={MdWork} text='Profile' />

        </div>
    )
}

export default Navigation