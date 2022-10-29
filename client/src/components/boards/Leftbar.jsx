import React from 'react'
import { Button, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { SnippetsOutlined, IdcardOutlined, PicCenterOutlined, MoneyCollectOutlined, SolutionOutlined } from '@ant-design/icons';
 
export default function Leftbar() {
    return (
        <aside className="hidden sm:flex sm:flex-col w-16">
            <Link to="/boards" className="inline-flex items-center justify-center h-14 w-20 bg-gray-800 hover:text-white pr-4 text-gray-50">
            <span>Tobo</span>
            </Link>
            <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-900">
                <nav className="flex flex-col mx-2 my-6 space-y-3">

                  
                    <Tooltip placement="right" title="Dashboard" color='blue'>
                        <Link to="/boards" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <span className="sr-only">Dashboard</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </Link>
                    </Tooltip>
                    <Tooltip placement="right" title="Hedefler" color='blue'>
                        <Link to="/boards/deals" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <MoneyCollectOutlined className='text-xl' />
                        </Link>
                    </Tooltip>
                    <Tooltip placement="right" title="Aktivitelerim" color='blue'>
                        <Link to="/boards/activities" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <PicCenterOutlined className='text-xl' />
                        </Link>
                    </Tooltip>

                    <Tooltip placement="right" title="Kişilerim" color='blue'>
                        <Link to="/boards/contacts" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <IdcardOutlined className='text-xl' />
                        </Link>
                    </Tooltip>
                    <Tooltip placement="right" title="Firmalar" color='blue'>
                        <Link to="/boards/companies" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <SolutionOutlined className='text-xl' />
                        </Link>
                    </Tooltip>
                    <Tooltip placement="right" title="Dokümanlarım" color='blue'>
                        <Link to="/boards/documents" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <SnippetsOutlined className='text-xl' />

                        </Link>
                    </Tooltip>

                </nav>
                
            </div>
        </aside>

    )
}
