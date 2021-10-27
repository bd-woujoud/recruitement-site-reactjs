import React, { useState } from 'react'
import Navigation from '../../pages/boards/navigation/Navigation'
import './profile.css'
import { CameraOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectuser, updateuser, uploadavatar } from '../../features/users/userSlice';
import { useDispatch } from 'react-redux';

import { EditOutlined } from '@ant-design/icons';
import { updateentreprise } from '../../features/entreprises/entrepriseSlice';
const Profile = () => {

    const dispatch = useDispatch()

    const user = useSelector(selectuser)

    const [userdetails, setuserdetails] = useState(user)



    const handlePicChanged = (e) => {

        let fdata = new FormData()

        fdata.append('image', e.target.files[0])

        let data = {
            id: user._id,
            data: fdata
        }


        dispatch(uploadavatar(data))


    }
    const [disabled, setdisabled] = useState(true)
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        dispatch(updateuser(values))
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setuserdetails(prevState => ({
            ...prevState,
            [name]: value
        }));



        console.log(userdetails);
    };


    const handleupdate = () => {
        let data = {
            id: user._id,
            data: userdetails
        }

        if (user.__t === 'entreprise') {

            dispatch(updateentreprise(data))
        } else {
            console.log('kjgf');
        }

    }

    return (
        <div>
            <Navigation />
            <br />
            <div style={{ marginTop: '200px' }}  >
                <div className=" rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-3 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img className="rounded-circle mt-5" width="150px" style={{ height: "150px" }} src={'http://localhost:5000/getfile/' + user.avatar} /> <CameraOutlined onClick={() => document.getElementById('upload').click()} className='upload' />
                                <span className="font-weight-bold"></span> {user.nom}
                                <span className="text-black-50"> {user.email}</span>

                            </div>

                        </div>
                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Profile Settings</h4>
                                    <EditOutlined className="upload" onClick={() => setdisabled(!disabled)} />
                                </div>

                                <div className="col-md-12"><label className="labels">Name</label><input type="text" className="form-control" value={userdetails.nom} onChange={handleChange} name="nom" disabled={disabled} /></div>
                                {(user.__t === "condidat") && <div className="col-md-12"><label className="labels">Last name</label><input value={userdetails.prenom} onChange={handleChange} name="prenom" type="text" className="form-control" disabled={disabled} /></div>}
                                <div className="col-md-12"><label className="labels">Mobile Number</label><input value={userdetails.téléphone} onChange={handleChange} name="téléphone" type="text" className="form-control" disabled={disabled} /></div>
                                <div className="col-md-12"><label className="labels">Adresse</label><input type="text" className="form-control" value={userdetails.adresse} onChange={handleChange} name="adresse" disabled={disabled} /></div>
                                <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" value={userdetails.email} onChange={handleChange} name="email" disabled={disabled} /></div>
                                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" onClick={() => handleupdate()} type="button">save</button></div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>

            <input id='upload' onChange={(e) => handlePicChanged(e)} type="file" hidden />

        </div>
    )
}

export default Profile
