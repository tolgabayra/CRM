import React from 'react'
import { Button, Checkbox, Divider, Modal, Radio, Space, Table } from 'antd'

import { red } from '@ant-design/colors';
import { useState } from 'react';

export default function Contacts() {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const columns = [
        {
            title: 'Ad Soyad',
            dataIndex: 'name',
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Jim',
                    value: 'Jim',
                },
                {
                    text: 'Submenu',
                    value: 'Submenu',
                    children: [
                        {
                            text: 'Green',
                            value: 'Green',
                        },
                        {
                            text: 'Black',
                            value: 'Black',
                        },
                    ],
                },
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Firma Adı',
            dataIndex: 'companyName',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.companyName - b.companyName,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.email - b.email,
        },
        {
            title: 'Telefon',
            dataIndex: 'phone',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.phone - b.phone,
        },
        {
            title: 'Address',
            dataIndex: 'address',
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
        // {
        //     title: 'İşlemler',
        //     key: 'action',
        //     render: (d) => (
        //         <Space size="middle">
        //             <Button onClick={showEditModal} className='bg-blue-500 rounded-md active:bg-blue-500 hover:bg-blue-600 border-white hover:border-white' type="primary" size="small">
        //                 Düzenle
        //             </Button>
        //             <Button className='bg-red-500 rounded-md hover:bg-red-600 border-white hover:border-white w-10' type="primary" size="small">
        //                 Sil
        //             </Button>
        //         </Space>
        //     ),
        // },
    ];





    const data = [
        {
            key: '1',
            name: 'Türkan Nazlıoğlu',
            companyName: "Turkcell",
            email: "trkynzli1241@gmail.com",
            phone: "1111111111111",
            address: 'Gazi Mahallesi Ulusoy, Ankara',
        },
        {
            key: '2',
            name: 'İrem Han',
            companyName: "Demir İnşaat A.Ş",
            email: "hanir@dinsaat.com",
            phone: "222222222222",
            address: 'Reşadiye, İstanbul',
        },
        {
            key: '3',
            name: 'Ahmet Unsuz',
            companyName: "Teyfik Optik",
            email: "unsuzamndet@gmail.com",
            phone: "3333333333333",
            address: 'Akçabaat Meydan, Trabzon',
        },
        {
            key: '4',
            name: 'Yavuz Resildar',
            companyName: "Vodafone",
            email: "hredilder@vodafone.com",
            phone: "44444444444444",
            address: 'Gölbaşı Parkı, Ankara',
        },
    ];



    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };



    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const showEditModal = () => {
        setIsEditModalOpen(true);
    };
    const handleEditOk = () => {
        setIsEditModalOpen(false);
    };
    const handleEditCancel = () => {
        setIsEditModalOpen(false);
    };

    return (
        <div>

            <Modal title="Basic Modal" open={isEditModalOpen} onOk={handleEditOk} onCancel={handleEditCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>


            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
                <div className="mr-6 mb-1">
                    <h1 className="text-4xl font-semibold mb-2">Kişilerim</h1>
                    <h2 className="text-gray-600 ml-0.5">İletişim bilgileri</h2>
                </div>
                <div className="flex flex-wrap items-start justify-end mb-3">
                    <button className="inline-flex px-5 py-2 text-blue-600 hover:text-blue-700 focus:text-blue-700 hover:bg-blue-100 focus:bg-blue-100 border border-blue-600 rounded-md mb-3">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Kişilerimi Yönet
                    </button>
                    <button onClick={() => setOpen(true)} className="inline-flex px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 rounded-md ml-6 mb-3">
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
                            type: Checkbox,
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                    />
                </div>
            </div>
        </div>
    )
}
