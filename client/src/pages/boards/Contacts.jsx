import React, { useEffect } from 'react'
import { Button, Checkbox, Divider, Dropdown, Form, Input, Menu, message, Modal, Popconfirm, Radio, Space, Table } from 'antd'
import { red } from '@ant-design/colors';
import { useState } from 'react';
import { mainAxios } from '../../utils/appAxios';



export default function Contacts() {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [fullName, setFullname] = useState("")
    const [companyName, setCompanyname] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhonenumber] = useState("")
    const [contactOwner, setContactowner] = useState("")

    const [selectedContactsId, setSelectedContactsId] = useState([])


    const [myContactList, setMyContactList] = useState([])

    useEffect(() => {
        getContactsList()
    }, [])

    useEffect(() => {
        console.log(selectedContactsId);
    }, [selectedContactsId])

    const getContactsList = () => {
        mainAxios.get("/api/v1/contacts", { withCredentials: true })
            .then((res) => {
                console.log(res);
                setMyContactList(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const deleteContacts = () => {
        mainAxios.post("/api/v1/contacts/multidelete", {
            contactList: selectedContactsId
        })
            .then((res) => {
                message.success("Silme İşlemi Başarılı")
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
      };


    const columns = [
        {
            title: 'Ad Soyad',
            dataIndex: 'fullName',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.fullName.length - b.fullName.length,


        },
        {
            title: 'Firma Adı',
            dataIndex: 'companyName',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.companyName - b.companyName
        },
        {
            title: 'Email',
            dataIndex: 'email',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.email - b.email,
        },
        {
            title: 'Telefon',
            dataIndex: 'phoneNumber',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.phoneNumber - b.phoneNumber,
        },
        {
            title: 'Kime ait',
            dataIndex: 'contactOwner',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },

    ];





    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

            setSelectedContactsId(selectedRows.map(i => i._id))
        }
    }





    const showEditModal = () => {
        setIsEditModalOpen(true);
    };
    const handleEditOk = () => {
        mainAxios.post("/api/v1/contacts", {
            fullName,
            companyName,
            email,
            phoneNumber,
            contactOwner,
            user_id: localStorage.getItem("_id")
        }, { withCredentials: true })
            .then((res) => {
                message.success("Yeni kişi eklendi.", 2.0)
                setIsEditModalOpen(false);
                getContactsList()
            })
            .catch(err => {
                message.error("Yeni kişi eklenemedi!", 2.0)
            })
    };
    const handleEditCancel = () => {
        setIsEditModalOpen(false);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    const menu = (
        <Menu
            className='rounded-lg'
            items={[
                {
                    label:
                        <Popconfirm
                        title="Silme İşlemini Onaylıyor musunuz?"
                        onConfirm={deleteContacts}
                        onCancel={cancel}
                        okText="Evet"
                        okType=''
                        cancelText="Hayır"
                        >
                            <button
                                className='text-red-600'>
                                Seçilen Kişileri Sil
                            </button>,
                        </Popconfirm>,
                    key: '0',
                },
                {
                    label: <a href="https://www.aliyun.com">2nd menu item</a>,
                    key: '1',
                },

            ]}
        />
    );


























    return (
        <div>

            <Modal
                title="Yeni Kişi Ekle"
                okType=''
                okText="Ekle"
                cancelText="İptal"
                bodyStyle={{
                    height: 300,
                }}
                width={600}
                open={isEditModalOpen}
                onOk={handleEditOk}
                onCancel={handleEditCancel}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Ad ve Soyad"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input onChange={(e) => setFullname(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Firma Adı"
                        name="companyName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input onChange={(e) => setCompanyname(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input onChange={(e) => setEmail(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Telefon"
                        name="phoneNumber"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input onChange={(e) => setPhonenumber(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="İletişim Sahibi"
                        name="contactOwner"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your contactOwner!',
                            },
                        ]}
                    >
                        <Input onChange={(e) => setContactowner(e.target.value)} />
                    </Form.Item>
                </Form>
            </Modal>


            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
                <div className="mr-6 mb-1">
                    <h1 className="text-4xl font-semibold mb-2">Kişilerim</h1>
                    <h2 className="text-gray-600 ml-0.5">İletişim bilgileri</h2>
                </div>
                <div className="flex flex-wrap items-start justify-end mb-3">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                            <button className="inline-flex px-5 py-2 text-green-600 hover:text-green-700 focus:text-green-700 hover:bg-green-100 focus:bg-green-100 border border-green-600 rounded-md mb-3">
                                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                                Kişilerimi Yönet
                            </button>
                        </a>
                    </Dropdown>

                    <button onClick={() => showEditModal()} className="inline-flex px-5 py-2 text-white bg-green-600 hover:bg-green-700 focus:bg-green-700 rounded-md ml-6 mb-3">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Yeni Kişi Ekle
                    </button>
                </div>
            </div>

            <div className=''>
                <div>

                    <Divider />

                    <Table
                        bordered
                        rowSelection={{
                            type: "checkbox",
                            ...rowSelection,
                        }}
                        columns={columns}
                        rowKey="fullName"
                        dataSource={myContactList}
                    />
                </div>
            </div>
        </div>
    )
}
