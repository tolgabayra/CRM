import { Upload } from 'antd'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { mainAxios } from '../../utils/appAxios';


const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};


export default function Profile() {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState("https://randomuser.me/api/portraits/women/68.jpg");
    const [user, setUser] = useState({})


    useEffect(() => {
        getUserInfo()
    }, [])

    const getUserInfo = () => {
        mainAxios.get(`/api/v1/users/${localStorage.getItem("_id")}`, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setUser(res.data)
            })
            .catch(err => {
                console.log(err);
                localStorage.clear()
            })

    }



    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? "dddd" : "Seç veya sürükle"}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Yükle
            </div>
        </div>
    );




    return (
        <div>
            <div class="p-10">
                <div class="p-8 bg-white shadow mt-4">
                    <div class="grid grid-cols-1 md:grid-cols-3">
                        <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">

                            <div>
                                <p class="font-bold text-gray-700 text-xl">22</p>
                                <p class="text-gray-400">Kişiler</p>
                            </div>
                            <div>
                                <p class="font-bold text-gray-700 text-xl">10</p>
                                <p class="text-gray-400">Firmalar</p>
                            </div>
                            <div>
                                <p class="font-bold text-gray-700 text-xl">89</p>
                                <p class="text-gray-400">Kullanıcılar</p>
                            </div>
                        </div>
                        <div class="relative">
                            <div class="">
                                <Upload
                                    name="avatar"
                                    className="w-32 h-32 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"
                                    showUploadList={false}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    beforeUpload={beforeUpload}
                                    onChange={handleChange}
                                >
                                    {imageUrl ? (
                                        <img
                                            src={imageUrl}
                                            alt="avatar"
                                            className=" rounded-full"
                                        

                                        />
                                    ) : (
                                        uploadButton
                                    )}
                                </Upload>

                            </div>
                        </div>
                        <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            <button class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Paylaş </button>    <button class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Son Mesajlarım</button>
                        </div>
                    </div>
                    <div class="mt-20 text-center border-b pb-12">
                        <h1 class="text-4xl font-medium text-gray-700">{user.username} <span class="font-light text-gray-500"></span></h1>    <p class="font-light text-gray-600 mt-3">{user.email}</p>      
                    </div>
                    <div class="mt-12 flex flex-col justify-center">
                        <p class="text-gray-600 text-center font-light lg:px-16">Genel bilgileriniz bu sayfadadır.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
