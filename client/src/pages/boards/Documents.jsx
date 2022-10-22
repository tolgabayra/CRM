import { Button, Modal } from 'antd'
import React from 'react'
import { useState } from 'react';

export default function Documents() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Modal
                title="Yeni Doküman Ekle"
                centered
                open={open}
                cancelText="İptal"
           
                okText="Oluştur"
                okType='default'
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                bodyStyle={{
                    height:200,
                }}
                width={600}
               
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
                <div className="mr-6 mb-1">
                    <h1 className="text-4xl font-semibold mb-2">Dokümanlarım</h1>
                    <h2 className="text-gray-600 ml-0.5">Doküman Ve Fatura Detayları</h2>
                </div>
                <div className="flex flex-wrap items-start justify-end -mb-3">
                    <button className="inline-flex px-5 py-3 text-blue-600 hover:text-blue-700 focus:text-blue-700 hover:bg-blue-100 focus:bg-blue-100 border border-blue-600 rounded-md mb-3">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Dokümanlarımı Yönet
                    </button>
                    <button onClick={()=> setOpen(true)} className="inline-flex px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 rounded-md ml-6 mb-3">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Yeni Doküman Ekle
                    </button>
                </div>
            </div>
        </div>
    )
}
