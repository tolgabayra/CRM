import { BackTop } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/boards/Header'
import Leftbar from '../../components/boards/Leftbar'


export default function Index() {
    return (
        <div>
            <body className="flex bg-gray-100 min-h-screen">

                <Leftbar />

                <div className="flex-grow text-gray-800">

                    <Header />
                    <main className="p-6 sm:p-10 space-y-6">
                        <Outlet />
                    </main>
                </div>
            </body>
            <BackTop visibilityHeight={50} />
        </div>
    )
}
