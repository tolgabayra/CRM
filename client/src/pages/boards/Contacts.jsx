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
            defaultSortOrder: 'descend',
            sorter: (a,b) => a.name.length - b.name.length,
            

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
        }
    }





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

            <Modal title="Yeni Kişi Ekle" okType='' okText="Ekle" cancelText="İptal" open={isEditModalOpen} onOk={handleEditOk} onCancel={handleEditCancel}>
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
                    <button className="inline-flex px-5 py-2 text-green-600 hover:text-green-700 focus:text-green-700 hover:bg-green-100 focus:bg-green-100 border border-green-600 rounded-md mb-3">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Kişilerimi Yönet
                    </button>
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
                        dataSource={data}
                    />                </div>
            </div>
        </div>
    )
}
