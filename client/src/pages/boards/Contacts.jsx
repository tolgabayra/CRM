import React, { useEffect } from 'react'
import { Button, Checkbox, Divider, Dropdown, Form, Input, Menu, message, Modal, Popconfirm, Radio, Space, Table } from 'antd'
import { red } from '@ant-design/colors';
import { useState } from 'react';
import { mainAxios } from '../../utils/appAxios';
import Highlighter from 'react-highlight-words';
import { useRef } from 'react';
import { SearchOutlined } from "@ant-design/icons"

export default function Contacts() {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false)
    const [fullName, setFullname] = useState("")
    const [companyName, setCompanyname] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhonenumber] = useState("")
    const [contactOwner, setContactowner] = useState("")
    const [selectedContactsId, setSelectedContactsId] = useState([])
    const [myContactList, setMyContactList] = useState([])

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [form] = Form.useForm();

    let emptyUser = {
        _id: null,
        fullName: "",
        companyName: "",
        phoneNumber: null,
        contactOwner: null,
        createdAt: "",
        updatedAt: ""
    }
    const [nowUserEdit, setNowUserEdit] = useState(emptyUser)


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

    {/* CONTACT SİLME İSTEĞİ */ }
    const deleteContacts = () => {
        if (selectedContactsId === null) {
            message.warning("Lütfen kişi seçtikten sonra deneyiniz")
        } else {
            mainAxios.post("/api/v1/contacts/multidelete", {
                contactList: selectedContactsId
            })
                .then((res) => {
                    message.success("Silme İşlemi Başarılı")
                    getContactsList()
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
        }

    }
    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };








    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Ara`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type=""
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Ara
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Sil
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Sıfırla
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                className='m-1 text-sm'
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });









    const columns = [
        {
            title: 'Ad Soyad',
            dataIndex: 'fullName',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.fullName.length - b.fullName.length,
            ...getColumnSearchProps('fullName'),


        },
        {
            title: 'Firma Adı',
            dataIndex: 'companyName',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.companyName - b.companyName,
            ...getColumnSearchProps('companyName')
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: 230,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.email - b.email,
            ...getColumnSearchProps('email')
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
        {
            title: 'İşlemler',
            dataIndex: '',
            key: 'x',
            render: (_, record) => {
                return (
                    <Button className='text-indigo-500' type='' onClick={() => handleEdit(record)}>
                        Düzenle
                    </Button>
                )
            }
        }

    ];


    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

            setSelectedContactsId(selectedRows.map(i => i._id))
        }
    }


    const handleEdit = (record) => {
        console.log(record);
        setIsSecondModalOpen(true)
        setNowUserEdit({ ...record })
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

    const handleOk = () => {
        setIsSecondModalOpen(false)
    }

    const handleCancel = () => {
        setIsSecondModalOpen(false)
        form.resetFields();
        
    }






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
                            </button>
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
                className=''
                title="Yeni Kişi Ekle"
                okType=''
                okText="Ekle"
                cancelText="İptal"
                bodyStyle={{
                    height: 400,
                    paddingLeft: 20,
                    paddingTop: 12,

                }}
                width={500}

                open={isEditModalOpen}
                onOk={handleEditOk}
                onCancel={handleEditCancel}>
                <Form
                    className='m-1'
                    name="basic"
                    layout='vertical'
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 30,
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
                        className='mb-3'
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
                        className='mb-3'
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
                        className='mb-3'
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
                        className='mb-3'
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






            <Modal title="Kişi Düzenleme" okText="Kaydet" cancelText="İptal" open={isSecondModalOpen} onOk={handleOk} onCancel={handleCancel} okType="">
                <Form
                    name=''
                    layout='vertical'
                    form={form}
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
                        <Input defaultValue={nowUserEdit.fullName} />
                    </Form.Item>

                    <Form.Item
                        label="Firma Adı"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input defaultValue={nowUserEdit.companyName} />
                    </Form.Item>
                    <Form.Item
                        label="Tel Numarası"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input defaultValue={nowUserEdit.phoneNumber} />
                    </Form.Item>
                    <Form.Item
                        label="İletişim Sahibi"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input defaultValue={nowUserEdit.contactOwner} />
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

                    <Divider className='mt-3' />

                    <Table
                        bordered
                        size='small'
                        pagination={{
                            defaultPageSize: 50,
                        }}
                        scroll={{

                            y: 600
                        }}
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
