import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigation from '../../pages/boards/navigation/Navigation'
import Sider from './Sider'
import { useParams, useRouteMatch } from 'react-router'
import Create from './Create'
import { useDispatch, useSelector } from 'react-redux'
import { getaaloffres, selectofres } from '../../features/offres/offreEmploiSlice'
import OffreItem from './OffreItem'
import MesOffres from './MesOffres'
import SinglePage from './SinglePage'
import Filter from './filters/Filter'

const Offres = () => {

    let { path, url } = useRouteMatch();


    const dispatch = useDispatch()

    const offres = useSelector(selectofres)

    useEffect(() => {
        dispatch(getaaloffres())
    }, [])

    return (
        <div class='main-content'  >
            <Navigation />
            <br />
            <div style={{ marginTop: '200px' }}  >

                <Row>

                    <Col span={4} >
                        <Sider />
                    </Col>
                    <Col span={14} >
                        <Switch>
                            <Route exact path={path}>

                                {
                                    offres.map((o, i) => {
                                        return (
                                            <OffreItem offre={o} />
                                        )
                                    })
                                }

                            </Route>
                            <Route path={`${path}/:topicId`}>
                                <Topic />
                            </Route>
                        </Switch>
                    </Col>
                    <Col span={6} >

                        <Filter />

                    </Col>

                </Row>

            </div>
        </div>
    )
}



export default Offres


function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();

    switch (topicId) {
        case 'create': return <Create />; break;
        case 'mesoffres': return <MesOffres />; break;
        case 'details': return <SinglePage />; break;

        default: return <p>home oofres</p>; break;
    }
}
