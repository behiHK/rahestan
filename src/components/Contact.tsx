import React, { useState } from 'react'
import locationIcon from "../images/location-icon.png"
import emailIcon from "../images/email-icon.png"
import phoneIcon from "../images/phone-icon.png"


const Contact = () => {
    const [ name, setName ] = useState("");
const [ message, setMessage ] = useState("");
const [ email, setEmail ] = useState("");

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
};

    return (
        <div className="x-full lg:h-[80vh] flex flex-col lg:flex-row justify-center items-center mx-4 my-4 lg:mx-40 lg:my-10 bg-white text-right">
            <div className='w-full lg:w-1/2 h-full lg:h-4/5  bg-red-600 py-8 lg:py-14 px-4 lg:px-40 shadow-lg mb-10 lg:mb-0'>
                    <p className='text-xl text-white text-right px-2 mb-4'>پیام خود را ارسال کنید</p>
                    <form
                        className="w-full flex h-full flex-col items-center justify-around px-2 text-gray-900 text-right"
                        onSubmit={handleSubmit}
                    >
                        <div className='w-full mb-2 flex flex-col justify-between'>
                            <label className="leading-3.5 mb-2 text-white">
                                نام
                            </label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                className={"w-full outline-none focus:outline-gray-100 rounded px-2 py-4 text-gray-900"}
                            />
                        </div>
                    <div className='w-full mb-2 flex flex-col justify-between'>
                    <label className="leading-3.5 mb-2 text-white">
                               ایمیل
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className={"w-full outline-none focus:outline-gray-100 rounded px-2 py-4 text-gray-900"}
                            />
                    </div>
                    <div className='w-full mb-2 flex flex-col justify-between'>
                    <label className="leading-3.5 mb-2 text-white">
                              متن پیام
                            </label>
                            <textarea
                                onChange={(e) => setMessage(e.target.value)}
                                className={"w-full outline-none focus:outline-gray-100 rounded px-2 py-4 text-gray-900"}
                                rows={5}
                            />
                    </div>
                        <button
                            type="submit"
                            disabled={!message ? true : false}
                            className={`w-1/2 h-10 my-4 text-center text-xl text-white bg-gray-600 hover:bg-gray-500 leading-4.5 rounded-full cursor-pointer ${!message ? "bg-opacity-50" : "bg-opacity-100"}`}
                        >
                            ارسال
                        </button>
                    </form>
            </div>
            <div className='flex flex-col justify-center items-right w-full lg:w-1/2 h-full lg:h-4/5 py-8 px-4 lg:px-40 shadow-2xl'>
                <div className='flex flex-row-reverse justify-start items-center mb-6'>
                    <img src={locationIcon} className='w-14 h-12'/>
                    <span className='pl-8  pr-4'>
                        نشانی
                    </span>
                    <span>اصفهان خیابان شیخ صدوق جنوبی </span>                      
                </div>

                <div className='flex flex-row-reverse justify-start items-center mb-6'>
                    <img src={emailIcon} className='w-14 h-12'/>
                    <span className='pl-8 pr-4'>
                        ایمیل
                    </span>
                    <span>rahestan.co@gmail.com</span>                      
                </div>

                <div className='flex flex-row-reverse justify-start items-center mb-6'>
                    <img src={phoneIcon} className='w-14 h-12 rotate-[260deg]'/>
                    <span className='pl-8 pr-4'>
                        تلفن
                    </span>
                    <span>۰۳۱-۳۶۶۶۶۶۶۶۶</span>                      
                </div>
            </div>
        </div>
    )
 }
 
 export default Contact