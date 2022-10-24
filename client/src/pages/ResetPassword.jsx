import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

export default function ResetPassword() {
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
                            Parolanı sıfırlamak için kayıtlı eposta adresinizi giriniz< br />
                            <div className='mt-2 text-red-100 font-extralight font-serif'>Parolanınızı Kimseyle Paylaşmayınız!</div>
                        </p>


                    </div>
                    <div className="p-5 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700 text-center"> Parolanızı mı unuttunuz ?</h3>


                        <Form
                            name="basic"
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
                                <Input placeholder='Eposta' />
                            </Form.Item>






                            <Form.Item
                            >
                                <Button block htmlType="submit">
                                    Parolamı Sıfırla
                                </Button>
                            </Form.Item>
                            <Link classNameName=' text-xs text-gray-500' to="/login">
                                Giriş Ekranına Dön
                            </Link>

                        </Form>


                    </div>
                </div>
            </div>
        </div>
    )
}
