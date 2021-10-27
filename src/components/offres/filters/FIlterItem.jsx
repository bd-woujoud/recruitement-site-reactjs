import React from 'react'
import { Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { filteroffres, refreshfilterOptions } from '../../../features/offres/offreEmploiSlice';

const FIlterItem = ({ text, type }) => {

    const dispatch = useDispatch()

    function onChange(e) {
        console.log(e);
        console.log(`checked = ${e.target.checked}`);

        dispatch(filteroffres({ type: type, text: e.target.value, checked: e.target.checked }))

    }

    return (
        <div className='filterItem'  >
            <div className="left">
                <Checkbox value={text} onChange={onChange}>{text}</Checkbox>
            </div>
            <div className="right">
                5154
            </div>
        </div>
    )
}

export default FIlterItem
