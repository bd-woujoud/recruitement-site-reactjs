import React, { useState } from 'react'
import FIlterItem from './FIlterItem';

const FilterSection = (props) => {



    const TheIcon = props.icon

    const [items, setitems] = useState(props.filteritems)

    return (
        <div className='FilterSection'  >
            <div className="sectionheader">

                <TheIcon className='sider-icon' {...props} />
                <span>{props.name}</span>
            </div>


            {
                items.map((item, i) => {
                    return (
                        <FIlterItem text={item} type={props.type} />
                    )
                })
            }

        </div>
    )
}

export default FilterSection
