import React from 'react'
import './offreitem.css'
import { BiMap } from 'react-icons/bi'
import { FaFileContract } from 'react-icons/fa'
import { FaRegCalendarAlt } from 'react-icons/fa'
import moment from 'moment'
import { useParams, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getOffreById } from '../../features/offres/offreEmploiSlice'

const OffreItem = ({ offre/* props offre itam data from table map as object 0 */ }) => {

    const dispatch = useDispatch()

    let { url } = useRouteMatch();

    

    return (
        <div className='offreitem'  >
            <Link to={`${url}/details`}>
                {/*  */}
                <div onClick={() =>{ dispatch(getOffreById({  id : offre._id })) ; localStorage.setItem('singleoffreid' , offre._id)}} style={{ cursor: 'pointer' }} className="offrehead">

                    <img src={'http://localhost:5000/getfile/' + offre.entreprise.avatar} alt="" />
                    <div className="details">
                        <span>{offre.poste}</span>
                        <h6>{offre.entreprise.nom}</h6>
                    </div>

                </div>
            </Link>
            <hr />
            <div className="offrebody">
                {offre.description}
            </div>

            <div className="offrefooter">

                <div className="location" >
                    <div>
                        <FaRegCalendarAlt className='icons' />
                        <span>{moment(offre.createdAt).format('DD-MM-YYYY')}</span>
                    </div>
                </div>
                <div className="location" >
                    <div>
                        <BiMap className='icons' />
                        <span>{offre.lieu}</span>
                    </div>
                </div>

                <div className="typecontrat">
                    <div>
                        <FaFileContract className='icons' />
                        <span>{offre.type_contrat}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OffreItem
