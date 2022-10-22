import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { mainAxios } from '../utils/appAxios';



export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    //Register İsteği
    const submitRegister = () => {
        mainAxios.post("/api/v1/auth/register",{
            username,
            email,
            password
        })
        .then(() => {
            message
            .loading('Hesabınız Oluşturuluyor..', 2.5)
            .then(() => message.success('Hesabınız oluşturuldu, Giriş sayfasına yönlendiriliyorsunuz.'))

            setTimeout(() => {
              navigate("/login")
            },4000)
        })
        .catch(err=>{
            message
            .loading('Hesabınız Oluşturuluyor..', 2.5)
            .then(() => message.warning('Üzgünüz, Şuan bu işlemi gerçekleştiremiyoruz.', 2.5))
        

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
                            With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the
                            UI design on us!
                        </p>


                    </div>
                    <div className="p-5 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700 text-center"> Kayıt Ol</h3>


                        <Form
                            name="basic"
                            onFinish={submitRegister}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            su
                        >
                            <Form.Item
                                name="Username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Kullanıcı adınız boş olamaz!',
                                    },
                                ]}
                            >
                                <Input onChange={(e)=>setUsername(e.target.value)} placeholder='Kullanıcı Adı' />
                            </Form.Item>

                            <Form.Item
                                name="Eposta"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Eposta adresiniz boş olamaz!',
                                    },
                                ]}
                            >
                                <Input onChange={(e)=>setEmail(e.target.value)} placeholder='Eposta' />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Parolanız boş olamaz!',
                                    },
                                ]}
                            >
                                <Input.Password onChange={(e)=>setPassword(e.target.value)} placeholder='Parola' />
                            </Form.Item>

                            <Form.Item

                            >
                                <Button block htmlType="submit">
                                    Kayıt Ol
                                </Button>
                            </Form.Item>
                            <Link classNameName='text-xs text-gray-500 m-auto' to="/login">
                                Zaten hesabınız var mı ? Giriş Yapın
                            </Link>

                        </Form>


                    </div>
                </div>
            </div>

        </div>
    )
}
