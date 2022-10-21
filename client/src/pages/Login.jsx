import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

export default function Login() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>



            <div class="flex items-center min-h-screen p-4 bg-gray-50 lg:justify-center">
                <div
                    class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
                >
                    <div
                        class="p-4 py-6 text-white bg-blue-500 md:w-96 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                    >

                        <p class="mt-6 font-normal text-center text-white md:mt-0">
                            With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the
                            UI design on us!
                        </p>


                    </div>
                    <div class="p-5 bg-white md:flex-1">
                        <h3 class="my-4 text-2xl font-semibold text-gray-700 text-center"> Giriş Yap</h3>


                        <Form
                            name="basic"

                            onFinish={onFinish}
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
                                <Input placeholder='Eposta'/>
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
                                    Giriş Yap
                                </Button>
                            </Form.Item>
                            <Link className=' text-xs text-gray-500' to="/register">
                                Hesabınız Yok mu ? Şimdi Oluşturun
                            </Link>

                        </Form>


                    </div>
                </div>
            </div>

        </div>
    )
}
