import { Alert, Col, Row } from 'antd'
import React, { useState } from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '../assets/css/register.css'
import company from '../assets/img/company.png'
import employer from '../assets/img/employer.png'
import {
    Form,
    Input,
    Button,
    Select
} from 'antd';
import { Typography } from 'antd';
import { useDispatch } from 'react-redux'
import { createentreprise, selectregisterstatus } from '../features/entreprises/entrepriseSlice'
import { createcandidat, getAllcandidat, selectregisterCandidatStatus } from '../features/candidats/candidatSlice';
import { useSelector } from 'react-redux'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useEffect } from 'react'
import { selectcategories } from '../features/categories/categoriesSlice';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const Register = (props) => {

    useEffect(() => {
        dispatch(getAllcandidat())
    }, [])

    const [actor, setactor] = useState('')
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const registercompanystatus = useSelector(selectregisterstatus)
    const registercandidatstatus = useSelector(selectregisterCandidatStatus)
    const categories = useSelector(selectcategories)
    const Candidatform = () => {

        const onFinish = (values) => {
            console.log('Received values of form: ', values);

            let data = {
                nom: values.nom,
                prenom: values.prenom,
                téléphone: values.téléphone,
                adresse: values.adresse,
                password: values.password,
                email: values.email,
            }
            dispatch(createcandidat(data))
        };

        return (
            <>
                {registercandidatstatus === 'success' ?
                    /*      <>
                             <Alert
                                 style={{ margin: 100 }}
                                 message="Successfully registred"
                                 description="you are successfully registred you can signin now."
                                 type="success"
                                 showIcon
     
                             />
                             <Button onClick={()=> props.history.push('/login')} style={{ margin: 100 }} type="primary">
                                 login
                             </Button>
                         </> */
                    <div class="alert alert-success mx-5" role="alert" style={{ marginTop: "150px" }} >
                        you are successfully registred <a href="/login" class="alert-link">LOGIN NOW</a>. Give it a click if you like to Login.
                    </div>
                    :
                    < Form
                        form={form}
                        name="register"
                        layout='vertical'
                        onFinish={onFinish}
                        initialValues={{
                            residence: ['zhejiang', 'hangzhou', 'xihu'],
                            prefix: '86',
                        }
                        }

                        style={{ padding: '100px' }}
                        className='regisetrcandidat'
                        scrollToFirstError
                    >
                        {registercandidatstatus === 'failure' && <Alert message="Error" type="error" showIcon />}

                        <Title level={3}>Candidat </Title>
                        {registercandidatstatus === 'loading' && <Spin indicator={antIcon} />}

                        <hr />

                        <Row gutter={16} >
                            <Col span={8}  >
                                <Form.Item
                                    name="nom"
                                    label="Nom"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Nom!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}  >
                                <Form.Item
                                    name="prenom"
                                    label="Prenom"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your prenom!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}  >
                                <Form.Item
                                    name="email"
                                    label="E-mail"

                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={8}  >
                                <Form.Item
                                    name="categorie"
                                    label="categorie"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your category!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Select>
                                        {
                                            categories.map((c, i) => {
                                                return (
                                                    <Select.Option value={c._id}>{c.nom_categorie}</Select.Option>

                                                )
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col span={8}  >
                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password />
                                </Form.Item>
                            </Col>
                            <Col span={8}  >
                                <Form.Item
                                    name="confirm"
                                    label="Confirm Password"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                            </Col>

                            <Col span={8}  >
                                <Form.Item
                                    name="téléphone"
                                    label="telephone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your specialite!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={24}  >
                                <Form.Item
                                    name="adresse"
                                    label="addresse"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your specialite!',
                                        },
                                    ]}
                                >
                                    <TextArea
                                        placeholder="Autosize height with minimum and maximum number of lines"
                                        autoSize={{ minRows: 2, maxRows: 6 }}
                                    />
                                </Form.Item>
                            </Col>
                            <Col offset={20} span={4} >
                                <div style={{ display: 'flex' }} >

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button onClick={() => setactor('')} style={{ background: 'red', color: 'white', marginLeft: '10px' }} >
                                            cancel
                                        </Button>
                                    </Form.Item>
                                </div>
                            </Col>

                        </Row>
                    </Form >}

            </>


        )
    }
    const CompanyForm = () => {

        const onFinish = (values) => {
            console.log('Received values of form: ', values);

            let data = {
                nom: values.nom,
                adresse: values.adresse,
                téléphone: values.téléphone,
                spécialité: values.spécialité,
                password: values.password,
                email: values.email,
            }
            dispatch(createentreprise(data))
        };
        return (
            <>
                {registercompanystatus === 'success' ?
                    <>
                        {/*        <Alert
                            style={{ margin: 100 }}
                            message="Successfully registred"
                            description="you are successfully registred you can signin now."
                            type="success"
                            showIcon


                        /> */}

                        <div class="alert alert-success mx-5" role="alert" style={{ marginTop: "150px" }} >
                            You are successfully registred <a href="/login" class="alert-link">LOGIN NOW</a>. Give it a click if you like to Login.
                        </div>
                    </>
                    :
                    < Form
                        form={form}
                        name="register"
                        layout='vertical'
                        onFinish={onFinish}
                        initialValues={{
                            residence: ['zhejiang', 'hangzhou', 'xihu'],
                            prefix: '86',
                        }
                        }

                        style={{ padding: '100px' }}
                        className='regisetrcompany'
                        scrollToFirstError
                    >
                        {registercompanystatus === 'failure' && <Alert message="Error" type="error" showIcon />}

                        <Title level={3}>Entreprise </Title>
                        {registercompanystatus === 'loading' && <Spin indicator={antIcon} />}

                        <hr />

                        <Row gutter={16} >
                            <Col span={8}  >
                                <Form.Item
                                    name="nom"
                                    label="Nom"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Nom!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}  >
                                <Form.Item
                                    name="email"
                                    label="E-mail"

                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={8}  >
                                <Form.Item
                                    name="categorie"
                                    label="categorie"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your category!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Select>
                                        {
                                            categories.map((c, i) => {
                                                return (
                                                    <Select.Option value={c._id}>{c.nom_categorie}</Select.Option>

                                                )
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col span={8}  >
                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password />
                                </Form.Item>
                            </Col>
                            <Col span={8}  >
                                <Form.Item
                                    name="confirm"
                                    label="Confirm Password"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                            </Col>

                            <Col span={8}  >
                                <Form.Item
                                    name="téléphone"
                                    label="telephone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your specialite!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={24}  >
                                <Form.Item
                                    name="adresse"
                                    label="addresse"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your specialite!',
                                        },
                                    ]}
                                >
                                    <TextArea
                                        placeholder="Autosize height with minimum and maximum number of lines"
                                        autoSize={{ minRows: 2, maxRows: 6 }}
                                    />
                                </Form.Item>
                            </Col>
                            <Col offset={20} span={4} >
                                <div style={{ display: 'flex' }} >

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button onClick={() => setactor('')} style={{ background: 'red', color: 'white', marginLeft: '10px' }} >
                                            cancel
                                        </Button>
                                    </Form.Item>
                                </div>
                            </Col>

                        </Row>
                    </Form >}

            </>


        )
    }
    return (
        <div className='registerform'>
            {actor === '' && <Row>
                <Col span={24} >
                    <span className='spanf' style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}  >
                        Vous êtes ?
                    </span>
                </Col>
                <Col offset={6} span={6}  >
                    <div className="company">
                        <img onClick={() => setactor('company')} src={company} alt="" />
                        <h4>Entreprise</h4>
                    </div>
                </Col>
                <Col span={6}  >
                    <div className="company">
                        <img onClick={() => setactor('employer')} src={employer} alt="" />
                        <h4>Candidat</h4>
                    </div>
                </Col>
            </Row>}

            {
                actor === 'company' && <CompanyForm />
            }
            {
                actor === 'employer' && <Candidatform />
            }

        </div>
    )
}

export default Register
