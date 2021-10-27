import Search from 'antd/lib/input/Search'
import React from 'react'
import '../../../assets/css/home.css'
import Navigation from '../navigation/Navigation'


const Home = () => {


    return (
        <>
            <div >

                <div>
                    <Navigation />
                </div>
                <div class='homecomponent' >
                    <div className="homesider">
                        sfsf
                    </div>

                    <div className="homemain">
                        <Search placeholder="input search text" onChange={(e) => console.log(e.target.value)} style={{ width: '100%' }} />
                    </div>

                    <div className="homeend">
                        sdfsfdsdf
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
