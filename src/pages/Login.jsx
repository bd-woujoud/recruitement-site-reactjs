import { Alert } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { useHistory } from 'react-router'
import '../assets/css/login.css'
import abcd from '../assets/img/abcd.png'
import { login, selectautheduser, selectloginstatus } from '../features/users/userSlice'
const Login = (props) => {


    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const dispatch = useDispatch()

    const history = useHistory()

    const status = useSelector(selectloginstatus)
    const user = useSelector(selectautheduser)
    
    const singin = () => {
        let data = {
            email: email,
            password: password
        }

        dispatch(login(data))
    }

    useEffect(() => {
    
        if (status.status === 'success') {
            console.log("roleeeeee",user.__t);
            history.push(`/${user.__t}`)
             /*    console.log();
            if (user.__t === 'entreprise') {
                console.log('yessss');
                history.push('/entreprise')
            } */
        }
    }, [status])

    return (
        <div style={{ marginTop: '100px' }}  >
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-form validate-form">
                            <span className="login100-form-title p-b-43">
                                Login to continue
                            </span>
                            {status.iserror && <Alert message={status.error} type="error" showIcon />}
                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input value={email} onChange={(e) => setemail(e.target.value)} className="input100" type="text" name="email" />
                                <span className="focus-input100" />
                                <span className="label-input100">Email</span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input value={password} onChange={(e) => setpassword(e.target.value)} className="input100" type="password" name="pass" />
                                <span className="focus-input100" />
                                <span className="label-input100">Password</span>
                            </div>
                            <div className="flex-sb-m w-full p-t-3 p-b-32">
                                <div className="contact100-form-checkbox">
                                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                    <label className="label-checkbox100" htmlFor="ckb1">
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    <a href="#" className="txt1">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>
                            <div className="container-login100-form-btn">
                                <button onClick={singin} className="login100-form-btn">
                                    Login
                                </button>
                            </div>

                            <div className="login100-form-social flex-c-m">
                                <a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
                                    <i className="fa fa-facebook-f" aria-hidden="true" />
                                </a>
                                <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                        <div className="login100-more" style={{ backgroundImage: `url(${abcd})` }}>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login

