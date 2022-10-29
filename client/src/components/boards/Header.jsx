import React from 'react'
import { Dropdown, Menu, message, Space } from 'antd';


import { useState } from 'react'
import { mainAxios } from '../../utils/appAxios'
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from 'react';


export default function Header() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()
    const logoutPopup = () => {
        console.log("TIK");
        mainAxios.post("/api/v1/auth/logout")
            .then((res) => {
                message.success("Çıkış İşlemi Başarılı.", 2.0)
                setTimeout(() => {
                    navigate("/login")

                }, 2000);
            })
            .catch(err => {
                console.log(err);
                message.warning("İşlem başarısız.")
            })
    }


    const menu = (
        <Menu
            className=' rounded-lg'
            items={[
                {
                    label: <Link to="profile">Profil</Link>,
                    key: '0',
                },
                {
                    label: <Link to="settings">Ayarlar</Link>,
                    key: '1',
                },
                {
                    type: 'divider',
                },
                {
                    label: <div onClick={logoutPopup}>Çıkış Yap</div>,
                    key: '3',
                },
            ]}
        />
    );




    useEffect(() => {
        getUserInfo()
    }, [])

    const getUserInfo = () => {
        mainAxios.get(`/api/v1/users/${localStorage.getItem("_id")}`, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setEmail(res.data.email)
                setUsername(res.data.username)
            })
            .catch(err => {
                console.log(err);
                localStorage.clear()
            })

    }


    const submitLogout = () => {
        mainAxios.post("/api/v1/auth/logout",)
            .then((res) => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }



    return (
        <div>
            <header className="flex items-center h-14 px-6 sm:px-10 bg-white">
                <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
                    <span className="sr-only">Menu</span>
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </button>
                <div className="relative w-full max-w-md sm:-ml-2">
                    <h3>Tobo CRM v1.0</h3>
                </div>
                <div className="flex flex-shrink-0 items-center ml-auto">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                            <button className="inline-flex items-center  pr-2 pl-2 hover:bg-gray-100 focus:bg-gray-100 rounded-md">
                                <span className="sr-only">User Menu</span>
                                <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                                    <span className="font-semibold">{email}</span>
                                    <span className="text-sm text-gray-600">{username}</span>
                                </div>
                                <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user profile photo" className="h-full w-full object-cover" />
                                </span>
                                <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="hidden sm:block h-6 w-6 text-gray-300">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </a>
                    </Dropdown>

                    <div className="border-l pl-3 ml-3 space-x-1">
                        <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                            <span className="sr-only">Notifications</span>
                            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <button onClick={submitLogout} className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                            <span className="sr-only">Log out</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}
