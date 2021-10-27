import React, { useEffect, useState } from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    Alert,
} from 'antd';
import { createOffre, selectcreateoffrestatus } from '../../features/offres/offreEmploiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectcategories } from '../../features/categories/categoriesSlice';
import { selectuser } from '../../features/users/userSlice';
const Create = (props) => {


    const dispatch = useDispatch()
    const createoffrestatus = useSelector(selectcreateoffrestatus)

    const categories = useSelector(selectcategories)
    const [form] = Form.useForm();
    const [displayform, setdisplayform] = useState(true)
    const [dispalysucessalert, setdispalysucessalert] = useState(false)
    const user = useSelector(selectuser)

    useEffect(() => {
        if (createoffrestatus === 'success') {
            setdispalysucessalert(true)
            onReset()
            setTimeout(() => {
                setdispalysucessalert(false)

            }, 3000);
        }



    }, [createoffrestatus])

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        values.entreprise = user._id
        dispatch(createOffre(values))
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div>

            <Form
                style={{ margin: '0 15px' }}
                layout='vertical'
                form={form}
                onFinish={onFinish}
            >
                {dispalysucessalert && <Alert style={{ marginBottom: "10px" }} message="Success Tips" type="success" showIcon />}

                <Form.Item rules={[{ required: true, message: 'Please input poste!' }]} name='poste' label="Poste">
                    <Input />
                </Form.Item>
                <Form.Item rules={[{ required: true, message: 'Please input description!' }]} name='description' label="Description">
                    <Input />
                </Form.Item>
                <Form.Item rules={[{ required: true, message: 'Please choose contrat type!' }]} name='type_contrat' label="Type_de_contrat">
                    <Select>
                        <Select.Option value="CDI" >CDI</Select.Option>
                        <Select.Option value="CDD">CDD</Select.Option>
                        <Select.Option value="CIVP" >CIVP</Select.Option>
                        <Select.Option value="KARAMA" >KARAMA</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item rules={[{ required: true, message: 'Please choose a category!' }]} name='categorie' label="Catégorie">
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
                <Form.Item rules={[{ required: true, message: 'Please choose a place!' }]} name='lieu' label="Lieu">
                    <Select>
                        <Select.Option value="Ariana">Ariana</Select.Option>
                        <Select.Option value="Beja">Beja</Select.Option>
                        <Select.Option value="Ben Arous">Ben Arous</Select.Option>
                        <Select.Option value="Bizerte">Bizerte</Select.Option>
                        <Select.Option value="Gabès">Gabès</Select.Option>
                        <Select.Option value="Gafsa">Gafsa</Select.Option>
                        <Select.Option value="Jendouba">Jendouba</Select.Option>
                        <Select.Option value="Kairouan">Kairouan</Select.Option>
                        <Select.Option value="Kébili">Kébili</Select.Option>
                        <Select.Option value="Le Kef">Le Kef</Select.Option>
                        <Select.Option value="Mahdia">Mahdia</Select.Option>
                        <Select.Option value="La Manouba">La Manouba</Select.Option>
                        <Select.Option value="Médenine">Médenine</Select.Option>
                        <Select.Option value="Monastir">Monastir</Select.Option>
                        <Select.Option value="Nabeul">Nabeul</Select.Option>
                        <Select.Option value="Sfax">Sfax</Select.Option>
                        <Select.Option value="Sidi Bouzid">Sidi Bouzid</Select.Option>
                        <Select.Option value="Siliana">Siliana</Select.Option>
                        <Select.Option value="Sousse">Sousse</Select.Option>
                        <Select.Option value="Tataouine">Tataouine</Select.Option>
                        <Select.Option value="Tozeur">Tozeur</Select.Option>
                        <Select.Option value="Tunis">Tunis</Select.Option>
                        <Select.Option value="Zaghouan">Zaghouan</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Create
