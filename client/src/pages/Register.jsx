import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

export default function Register() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
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

                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
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
                                <Input placeholder='Kullanıcı Adı' />
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
                                <Input placeholder='Eposta' />
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
                                <Input.Password placeholder='Parola' />
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