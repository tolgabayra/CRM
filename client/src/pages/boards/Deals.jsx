import { Card, Col, Divider, Row, Steps } from 'antd'

import React from 'react'

export default function Deals() {
  return (
    <div>
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6 mb-1">
          <h1 className="text-4xl font-semibold mb-2">Hedeflerim</h1>
        </div>
        <div className="flex flex-wrap items-start justify-end mb-3">
          <button className="inline-flex px-5 py-2 text-green-600 hover:text-green-700 focus:text-green-700 hover:bg-green-100 focus:bg-green-100 border border-green-600 rounded-md mb-3">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Hedeflerimi Yönet
          </button>
          <button onClick={() => showEditModal()} className="inline-flex px-5 py-2 text-white bg-green-600 hover:bg-green-700 focus:bg-green-700 rounded-md ml-6 mb-3">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Yeni Hedef Ekle
          </button>
        </div>
      </div>
      <Divider orientation="left"></Divider>


      <Row
        className=''
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={6}>
          <Card
            className='mb-2 rounded-md border-t-4 border-b-0 border-r-0 border-l-0 border-orange-500'
            size='small'

            style={{
              width: 300,
            }}
          >
            <p>Yeni Hedeflerim : 3</p>
          </Card>
          <div className=' rounded-md'>
            <Card
              title="Üyelik Yenileme Arayüz"
              size='small'
              className='mb-2 rounded-xl'
              style={{
                width: 300,
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>25.000 $</p>
            </Card>
            <Card
              className='mb-2 rounded-xl'
              size='small'

              style={{
                width: 300,
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card
              className='mb-2 rounded-xl'
              size='small'

              style={{
                width: 300,
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        </Col>


        <Col className="gutter-row" span={6}>
        <Card
            className='mb-2 rounded-md border-t-4 border-b-0 border-r-0 border-l-0 border-gray-500'
            size='small'

            style={{
              width: 300,
            }}
          >
            <p>Değerlendirme : 3</p>
          </Card>
          <div className=' rounded-md'>
            <Card
              title="Arayüz için diğer giderler"
              size='small'
              className='mb-2 rounded-xl'
              style={{
                width: 300,
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>5.000 $</p>
            </Card>
            <Card
              className='mb-2 rounded-xl'
              size='small'

              style={{
                width: 300,
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card
              className='mb-2 rounded-xl'
              size='small'

              style={{
                width: 300,
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div>col-6</div>
        </Col>
      </Row>

    </div>
  )
}
