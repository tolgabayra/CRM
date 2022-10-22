import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page404() {
  const navigate = useNavigate()

  return (
    <div>
      <div
        className="
          flex
          items-center
          justify-center
          w-screen
          h-screen
          bg-gradient-to-r
          from-gray-200
          to-blue-200
  "
      >
        <div className="px-40 py-20 bg-gray-100 rounded-md shadow-xl">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-blue-600 text-9xl">404</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Bu sayfa bulunamadı!
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">
              Aradığınız sayfa mevcut değil.
            </p>

            <a
              onClick={() => navigate(-1)}
              className="px-6 py-2 text-sm font-semibold text-blue-600 bg-blue-100"
            >Geri Dön</a
            >
          </div>
        </div>
      </div>
    </div>
  )
}
