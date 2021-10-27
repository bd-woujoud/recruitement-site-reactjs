import React, { useEffect } from 'react'
import { Row, Col, Modal } from 'antd';
import { useSelector } from 'react-redux';
import { getoffrebyid, selectsingleoffre } from '../../features/offres/offreEmploiSlice';
import moment from 'moment'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import { RiSendPlane2Fill } from 'react-icons/ri'
import './single.css'
import { selectautheduser, selectuser } from '../../features/users/userSlice';
import { useDispatch } from 'react-redux';
import { creatcomment, selectcreatecomment } from '../../features/comments/commentSlice';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const SinglePage = () => {


    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Import your files');
    const user = useSelector(selectuser)
    const offre = useSelector(selectsingleoffre)
    const dispatch = useDispatch()
    const createcommstatus = useSelector(selectcreatecomment)

    useEffect(() => {
        dispatch(getoffrebyid(offre._id))
    }, [createcommstatus])

    const CommentItem = ({ comment }) => {
        return (
            <div className='commentitem'  >
                <div className="commentitemtop">
                    <img src={'http://localhost:5000/getfile/' + comment.user.avatar} alt="" />
                    <div className='commentright' >
                        <h5>{comment.user.nom}</h5>
                        <p>{comment.msg}</p>
                        <span>{comment.createdAt}</span>
                    </div>
                </div >
            </div>
        )
    }

    const comment = (e) => {


        let data = {
            msg: e.target.value,
            offre: offre._id,
            user: user._id
        }

        if (e.key === 'Enter') {
            dispatch(creatcomment(data))
            document.getElementById('commentinput').value = ""
        }

    }

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    }

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <div>

            <Row  >
                <Col span={24}>image maps</Col>
            </Row>
            <hr />

            <div style={{ display: 'flex', justifyContent: "space-between" }}  >
                <div style={{ display: "flex" }}  >
                    <img src={'http://localhost:5000/getfile/' + offre.entreprise.avatar} alt="" className='img' />
                    <h4 style={{ marginLeft: '20px' }}  >{offre.entreprise.nom}</h4>

                </div>

                <div>
                    {(user.__t === 'condidat') && <button className="btn btn-primary" onClick={showModal} >postuler</button>}

                    {(user.__t === 'entreprise') && <button className="btn btn-primary">Update</button>}
                </div>
            </div>

            <div style={{ marginTop: '20px' }}  >
                <h5>{offre.poste}</h5>
                <p>
                    {offre.description}
                </p>
            </div>


            <hr />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}  >
                <div>{moment(offre.createdAt).format('DD-MM-YYYY')}</div>
                <div>{offre.type_contrat}</div>
                <div>{offre.lieu}</div>
            </div>

            {/* <div className="container mt-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-12">
                        <div className="d-flex flex-column comment-section">

                            <div className="bg-white">
                                <div className="d-flex flex-row fs-12">
                                    <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up" /><span className="ml-1">Add to favoris List </span></div>
                                    <div className="like p-2 cursor"><i className="fa fa-commenting-o" /><span className="ml-1">Comment</span></div>
                                    <div className="like p-2 cursor"><i className="fa fa-share" /><span className="ml-1">Share</span></div>
                                </div>
                            </div>
                            <div className="bg-light p-2">
                                <div className="d-flex flex-row align-items-start"><img className="rounded-circle" src={'http://localhost:5000/getfile/' + user.avatar} width={40} width={40} /><textarea className="form-control ml-1 shadow-none textarea" defaultValue={""} /></div>
                                <div className="mt-2 text-right"><button className="btn btn-primary btn-sm shadow-none" type="button">Post comment</button><button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="comments">
                <div style={{ display: 'flex', alignItems: "center" }} >
                    <img src={'http://localhost:5000/getfile/' + offre.entreprise.avatar} alt="" className='commenter' />
                    <div className='commentinput' >
                        <input type="text" id='commentinput' onKeyDown={(e) => comment(e)} />
                        <RiSendPlane2Fill className="sendicon" />
                    </div>
                </div>
                {
                    offre.commentaires.map((o, i) => {
                        return (

                            <CommentItem comment={o} />
                        )
                    })
                }

            </div>
            <Modal
                title={offre.poste}
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
                <Upload {...props}>
                    <span>CV:</span>  <Button icon={<UploadOutlined />}>Click to Upload</Button><br />

                    <span>LM:</span>  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            </Modal>
        </div>

    )
}

export default SinglePage
