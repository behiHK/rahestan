import React, { useState } from 'react'
import locationIcon from "../images/location-icon.png"
import emailIcon from "../images/email-icon.png"
import phoneIcon from "../images/phone-icon.png"


const Contact = () => {
    const [ name, setName ] = useState("");
const [ message, setMessage ] = useState("");
const [ email, setEmail ] = useState("");
const [ phone, setPhone ] = useState("");

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
};

    return (
        <div className="x-full flex flex-col lg:flex-row-reverse justify-center items-center mx-4 my-4 lg:mx-40 lg:my-10 bg-white text-right">
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
                                type='email'
                                className={"w-full outline-none focus:outline-gray-100 rounded px-2 py-4 text-gray-900"}
                            />
                    </div>
                    <div className='w-full mb-2 flex flex-col justify-between'>
                    <label className="leading-3.5 mb-2 text-white">
                               تلفن
                            </label>
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                type='number'
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
                            className={`w-1/2 h-14 my-4 text-center text-xl text-white bg-gray-600 hover:bg-white hover:text-gray-500 rounded-md cursor-pointer ${!message ? "bg-opacity-50" : "bg-opacity-100"}`}
                        >
                            ارسال
                        </button>
                    </form>
            </div>
            <div className='flex flex-col justify-center items-start w-full lg:w-1/2 h-full lg:h-4/5 py-8 px-4 lg:px-10 shadow-2xl'>
                <div className='flex flex-row justify-start items-center mb-6'>
                    <img src={locationIcon} className='w-10 h-8'/>
                    <span className='pl-8  pr-4'>
                        نشانی
                    </span>
                   <div className='leading-loose'>
                   <p> دفتر تهران: میدان ونک، خیابان گاندی، خیابان ۲۱، پلاک ۸، شماره ۳ </p>  
                    <p> دفتر اصفهان: خیابان هزارجریب، کوچه شهید سرایچی، پلاک ۷۹، واحد ۱ </p>  
                    </div>                 
                </div>

                <div className='flex flex-row justify-start items-center mb-6'>
                    <img src={phoneIcon} className='w-۱0 h-8 rotate-[260deg]'/>
                    <span className='pl-8 pr-4'>
                    &nbsp; تلفن
                    </span>
                    <div className='leading-loose'>
                        <p> دفتر تهران: &nbsp;۸۸۷۹۲۲۹۹-۰۲۱&nbsp;&nbsp; ۸۸۷۹۹۶۲۹-۰۲۱</p>  
                        <p> دفتر اصفهان: &nbsp;۳۶۶۹۳۹۸۲-۰۳۱&nbsp;&nbsp; ۳۶۶۸۷۵۹۹-۰۳۱</p>  
                    </div>                 
                </div>          

                <div className='flex flex-row justify-start items-center mb-6'>
                    <img src={emailIcon} className='w-10 h-8'/>
                    <span className='pl-8 pr-4'>
                        ایمیل
                    </span>
                    <span>info@rahestan.com</span>                      
                </div>
            </div>
        </div>
    )
 }
 
 export default Contact