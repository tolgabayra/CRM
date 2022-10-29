import { Divider, Form, Input, Modal, Table } from 'antd';
import React, { useState } from 'react'

export default function Companies() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const showModal = () => {
    setIsAddModalOpen(true);
  };
  const handleOk = () => {
    setIsAddModalOpen(false);
  };
  const handleCancel = () => {
    setIsAddModalOpen(false);
  };


  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];



  return (
    <div>
      <Modal title="Basic Modal" open={isAddModalOpen} onOk={handleOk} onCancel={handleCancel}>

        <Form
          className='m-1 '
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
            <Input />
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
            <Input />
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
            <Input />
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
            <Input />
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
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6 mb-1">
          <h1 className="text-4xl font-semibold mb-2">Firmalar</h1>
          <h2 className="text-gray-600 ml-0.5">Firma Detayları</h2>
        </div>
        <div className="flex flex-wrap items-start justify-end -mb-3">
          <button className="inline-flex px-5 py-2 text-green-600 hover:text-green-700 focus:text-green-700 hover:bg-green-100 focus:bg-green-100 border border-green-600 rounded-md mb-3">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Firmaları Yönet
          </button>
          <button onClick={showModal} className="inline-flex px-5 py-2 text-white bg-green-600 hover:bg-green-700 focus:bg-green-700 rounded-md ml-6 mb-3">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Yeni Firma Ekle
          </button>
        </div>
      </div>

      <Divider className='mt-3' />
      <div>
        <Table
          bordered
          rowSelection={{
            type: "checkbox"
          }}
          dataSource={dataSource}
          columns={columns}
        />
      </div>

    </div>
  )
}
