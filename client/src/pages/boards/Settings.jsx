import React from 'react'

export default function Settings() {
    return (
        <div>
            <div className="p-10">
                <div className="p-8 bg-white shadow mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">

                            <div>
                            <button className="text-white py-1 px-12 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Parolamı Değiştir</button>

                            </div>
                       
                          
                        </div>
                        <div className="relative">
                            <div className="">


                            </div>
                        </div>
                        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Paylaş </button>
                            <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Son Mesajlarım</button>
                        </div>
                    </div>
                    <div className="mt-20 text-center border-b pb-12">
                        <h1 className="text-4xl font-medium text-gray-700">s <span className="font-light text-gray-500"></span></h1>  
                          <p className="font-light text-gray-600 mt-3">n</p>
                    </div>
                    <div className="mt-12 flex flex-col justify-center">
                        <p className="text-gray-600 text-center font-light lg:px-16">Genel bilgileriniz bu sayfadadır.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
