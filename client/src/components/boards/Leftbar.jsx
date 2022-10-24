import React from 'react'
import { Button, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { SnippetsOutlined, IdcardOutlined, PicCenterOutlined, MoneyCollectOutlined } from '@ant-design/icons';
export default function Leftbar() {
    return (
        <aside className="hidden sm:flex sm:flex-col">
            <Link to="/boards" className="inline-flex items-center justify-center h-16 w-20 bg-blue-600 hover:bg-blue-500 focus:bg-blue-500">
              
            </Link>
            <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
                <nav className="flex flex-col mx-4 my-6 space-y-4">

                  
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
                    <Tooltip placement="right" title="Dokümanlarım" color='blue'>
                        <Link to="/boards/documents" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <SnippetsOutlined className='text-xl' />

                        </Link>
                    </Tooltip>

                </nav>
                <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
                    <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                        <span className="sr-only">Settings</span>
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </aside>

    )
}
