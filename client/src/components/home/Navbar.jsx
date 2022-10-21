import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <section className="w-full px-8 text-gray-700 bg-white">
                <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div className="relative flex flex-col md:flex-row">
                        <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none"> Toba CRM<span className="text-blue-600">.</span></span>
                        </a>
                        <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</a>
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Features</a>
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
                        </nav>
                    </div>

                    <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                        <Link to="/login">
                            <a className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                                Giriş Yap
                            </a>
                        </Link>
                        <Link to="/register">
                            <a className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-500 hover:text-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                Kayıt Ol
                            </a>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    )
}
