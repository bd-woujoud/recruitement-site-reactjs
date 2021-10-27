import React from 'react'
import { useSelector } from 'react-redux'
import { selectofres } from '../../features/offres/offreEmploiSlice'
import { selectautheduser } from '../../features/users/userSlice'
import OffreItem from './OffreItem'


const MesOffres = () => {

    const offres = useSelector(selectofres)

    const user = useSelector(selectautheduser)

    return (
        <div>
            {
                offres.map((o, i) => {
                    return (
                        <>
                            {
                                o.entreprise._id === user._id && <OffreItem offre={o} />
                            }
                        </>
                    )
                })
            }
        </div>
    )
}

export default MesOffres
