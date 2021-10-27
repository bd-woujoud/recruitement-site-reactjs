import React, { useEffect } from 'react'
import './filter.css'
import FilterSection from './FilterSection'
import { BiFilterAlt } from 'react-icons/bi'
import { VscLocation } from 'react-icons/vsc'
import { FaFileContract } from 'react-icons/fa'
import { BsListCheck } from 'react-icons/bs'
import data from './locations.json'
import { useSelector } from 'react-redux'
import { selectcategories, selectcategorynames } from '../../../features/categories/categoriesSlice'


const Filter = () => {

    const categories = useSelector(selectcategorynames)

    return (
        <div className='filterpanel' >
            <div className="filterheader">
                <div>
                    <BiFilterAlt className="iconsSIze" />
                </div>
                <h5>Filter</h5>
            </div>

            <FilterSection icon={VscLocation} name={`Lieu d'offre`} type='location' filteritems={data.gouvernorats} />
            <FilterSection icon={BsListCheck} name={`Category`} type='category' filteritems={categories} />
            <FilterSection icon={FaFileContract} name={`Type Contrat`} type='Contrat' filteritems={data.typecontrat} />
        </div>
    )
}

export default Filter
