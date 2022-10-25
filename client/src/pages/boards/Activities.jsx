import { Space, Table, Tag, Tabs } from 'antd';
import React from 'react'

const columns = [
  {
    title: 'Task Adı',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Bitiş Tarihi',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Durum',
    dataIndex: 'age',
    key: 'age',
  },

  {
    title: 'Öncelik',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekgreen' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'İşlemler',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a className='text-indigo-600'>Düzenle</a>
        <a className='text-red-600'>Sil</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'Ürün tanıtım Toplantısı',
    age: "Tamamlandı",
    address: '28 Mayıs, 2021',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Turkcell Mehmet Bey, Görüşmesi',
    age: "Tamamlandı",
    address: '12 Ocak, 2021',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Yeni yazılım sözleşme toplantısı',
    age: "Devam etmektedir",
    address: '21 Ekim, 2023',
    tags: ['cool', 'teacher'],
  },
];


export default function Activities() {
  return (
    <div>
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6 mb-1">
          <h1 className="text-4xl font-semibold mb-2">Aktivite Sayfası</h1>
        </div>
        <div className="flex flex-wrap items-start justify-end mb-3">
          <button onClick={() => showEditModal()} className="inline-flex px-5 py-2 text-white bg-green-600 hover:bg-green-700 focus:bg-green-700 rounded-md ml-6 mb-3">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Yeni Task Ekle
          </button>
          <button onClick={() => showEditModal()} className="inline-flex px-5 py-2 text-white bg-green-600 hover:bg-green-700 focus:bg-green-700 rounded-md ml-6 mb-3">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Yeni Etkinlik Ekle
          </button>
          <button onClick={() => showEditModal()} className="inline-flex px-5 py-2 text-white bg-green-600 hover:bg-green-700 focus:bg-green-700 rounded-md ml-6 mb-3">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Yeni Çağrı Ekle
          </button>
        </div>
      </div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Tasklar" key="1">

          <Table columns={columns} dataSource={data} />

        </Tabs.TabPane>
        <Tabs.TabPane tab="Etkinlikler" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane tab="Çağrılarım" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>



    </div>
  )
}
