import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { login } from '../features/authSlice';
import { mainAxios } from '../utils/appAxios';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    //Login İsteği
    const submitLogin = () => {
        mainAxios.post("/api/v1/auth/login", {
            email,
            password
        }, { withCredentials: true })
            .then((res) => {
                message
                    .loading('Giriş Yapılıyor...', 2.5)
                    .then(() => message.success('Giriş Başarılı, Panel sayfasına yönlendiriliyorsunuz.'))
                setTimeout(() => {
                    dispatch(login())
                    navigate("/boards")
                }, 4000)

                localStorage.setItem("_id", res.data._id)
            })
            .catch(err => {
                message
                    .loading('Giriş Yapılıyor..', 2.5)
                    .then(() => message.warning('Eposta veya parolanız yanlış.', 2.5))
                console.log(err);
            })
    }




    return (
        <div>
            <div className="flex items-center min-h-screen p-4 bg-gray-50 lg:justify-center">
                <div
                    className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
                >
                    <div
                        className="p-4 py-6 text-white bg-blue-500 md:w-96 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                    >

                        <p className="mt-6 font-normal text-center text-white md:mt-0">
                            Hoşgeldin,<br />
                            Bu ekrandan hesabına giriş yapabilirsin.< br />
                            <div className='mt-2 text-red-100 font-extralight font-serif'>Parolanınızı Kimseyle Paylaşmayınız!</div>
                        </p>


                    </div>
                    <div className="p-5 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700 text-center"> Giriş Yap</h3>


                        <Form
                            name="basic"

                            onFinish={submitLogin}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="Eposta"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Eposta adresiniz boş olamaz!',
                                    },
                                ]}
                            >
                                <Input onChange={(e) => setEmail(e.target.value)} placeholder='Eposta' />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                className='mb-4'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Parolanız boş olamaz!',
                                    },
                                ]}
                            >
                                <Input.Password onChange={(e) => setPassword(e.target.value)} placeholder='Parola' />

                            </Form.Item>
                            <div className='flex justify-end'>
                                <Link className=" text-blue-600" to="/reset_password" >Parolamı Unuttum ?</Link>
                            </div>




                            <Form.Item
                            className='mt-2'
                            >
                                <Button block htmlType="submit">
                                    Giriş Yap
                                </Button>
                            </Form.Item>
                            <span>Hesabınız Yok mu ? </span>
                            <Link classNameName=' text-xs' to="/register">
                                <span className='text-blue-600'>Şimdi Oluşturun</span>
                            </Link>

                        </Form>


                    </div>
                </div>
            </div>

        </div>
    )
}
