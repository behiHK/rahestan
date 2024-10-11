import React, { useState } from 'react'
import locationIcon from "../images/location-icon.png"
import emailIcon from "../images/email-icon.png"
import phoneIcon from "../images/phone-icon.png"
import { useIntl } from 'gatsby-plugin-intl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Contact = () => {
    const intl = useIntl()
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [error, setError] = useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email.trim()) {
            toast.error(intl.formatMessage({ id: "emailRequired" }), { position: intl.locale === "fa" ? "top-right" : "top-left", style: { fontFamily: "Vazirmatn" } })
            error.push("email")
            setError(error)
            return
        }

        if (!message.trim()) {
            toast.error(intl.formatMessage({ id: "messageRequired" }), { position: intl.locale === "fa" ? "top-right" : "top-left", style: { fontFamily: "Vazirmatn" } })
            error.push("message")
            setError(error)
            return
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error(intl.formatMessage({ id: "emailInvalid" }), { position: intl.locale === "fa" ? "top-right" : "top-left", style: { fontFamily: "Vazirmatn" } })
            error.push("email")
            setError(error)
            return
        }

        if (!!phone && !/^[0-9\u06F0-\u06F9]+$/.test(phone)) {
            toast.error(intl.formatMessage({ id: "phoneInvalid" }), { position: intl.locale === "fa" ? "top-right" : "top-left", style: { fontFamily: "Vazirmatn" } })
            error.push("phone")
            setError(error)
            return
        }
        console.log("SEND >>>>>>>>>>>>>>>>");
        const data = {
            name,
            message,
            email,
            phone
        }

        setName("")
        setEmail("")
        setMessage("")
        setPhone("")
        setError([])

        try {
            await axios.request(
                {
                    url: "http://localhost:3000/contact",
                    data,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "post"
                }
            )
            console.log("AFTER......");


        } catch (error) {
            console.log("ERRROROOR........", error);

        }
    };


    return (
        <div className={`x-full flex flex-col  justify-center items-center mx-4 my-4 lg:mx-40 lg:my-10 bg-white ${intl.locale === "fa" ? "lg:flex-row-reverse text-right" : "lg:flex-row text-left"}`}>
            <ToastContainer />
            <div className='w-full lg:w-1/2 h-full  bg-khaki-100 py-8 lg:py-14 px-4 lg:px-40 shadow-lg mb-10 lg:mb-0'>
                <p className='text-xl text-white px-2 mb-4'> {intl.formatMessage({ id: "contactFormTitle" })}</p>
                <form
                    className="w-full flex h-full flex-col items-center justify-around px-2 text-gray-900"
                    onSubmit={handleSubmit}
                >
                    <div className='w-full mb-2 flex flex-col justify-between'>
                        <label className="leading-3.5 mb-2 text-white">
                            {intl.formatMessage({ id: "name" })}
                        </label>
                        <input
                            onChange={(e) => {
                                setName(e.target.value)
                                setError([])
                            }
                            }
                            name='name'
                            value={name}
                            className={`w-full outline-none focus:outline-gray-100 rounded px-2 py-4 text-gray-900 `}
                        />
                    </div>
                    <div className='w-full mb-2 flex flex-col justify-between'>
                        <label className="leading-3.5 mb-2 text-white">
                            {intl.formatMessage({ id: "email" })}
                        </label>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setError([])
                            }}
                            type='email'
                            name='email'
                            value={email}
                            className={`w-full outline-none focus:outline-gray-100 rounded px-2 py-4 text-gray-900  ${error.includes("email") ? "border-violet-200" : ""}`}
                        />
                    </div>
                    <div className='w-full mb-2 flex flex-col justify-between'>
                        <label className="leading-3.5 mb-2 text-white">
                            {intl.formatMessage({ id: "phone" })}
                        </label>
                        <input
                            onChange={(e) => {
                                setPhone(e.target.value)
                                setError([])
                            }}
                            type='text'
                            name='phone'
                            value={phone}
                            className={`w-full outline-none focus:outline-gray-100 rounded px-2 py-4 text-gray-900  ${error.includes("phone") ? "border-violet-200" : ""}`}
                        />
                    </div>
                    <div className='w-full mb-2 flex flex-col justify-between'>
                        <label className="leading-3.5 mb-2 text-white">
                            {intl.formatMessage({ id: "message" })}
                        </label>
                        <textarea
                            onChange={(e) => {
                                setMessage(e.target.value)
                                setError([])
                            }}
                            name='message'
                            value={message}
                            className={`w-full outline-none focus:outline-gray-100 rounded px-2 py-4 text-gray-900  ${error.includes("message") ? "border-violet-200" : ""}`}
                            rows={5}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={!message ? true : false}
                        className={`w-1/2 h-14 my-4 text-center text-xl text-white bg-violet-200 hover:bg-violet-300  rounded-full cursor-pointer hover:shadow-inner hover:shadow-violet-0`}
                    >
                        {intl.formatMessage({ id: "submit" })}
                    </button>
                </form>
            </div>
            <div className={`flex flex-col justify-center items-start w-full lg:w-1/2 h-full mx-4  py-8 px-4 lg:px-10 ${intl.locale === "fa" ? "rtl border-r-4 border-r-violet-200" : "ltr border-l-4 border-l-violet-200"} bg-gray-0`}>
                <div className='flex flex-row justify-start     items-center mb-6'>
                    <img src={locationIcon} className='w-10 h-8' />
                    <span className='px-4'>
                        {intl.formatMessage({ id: "address" })}
                    </span>
                    <div className='leading-loose'>
                        <p className='px-4'> {intl.formatMessage({ id: "footerOfficeTehran" })}: {intl.formatMessage({ id: "footerAddressTehran" })}</p>
                        <p className='px-4'> {intl.formatMessage({ id: "footerOfficeEsfahan" })}: {intl.formatMessage({ id: "footerAddressEsfahan" })}</p>
                    </div>
                </div>

                <div className='flex flex-row justify-start items-center mb-6'>
                    <img src={phoneIcon} className={`w-10 h-8 ${intl.locale === "fa" ? "rotate-[260deg]" : "rotate-[10deg]"}`} />
                    <span className='px-4'>
                        &nbsp; {intl.formatMessage({ id: "phone" })}
                    </span>
                    <div className='leading-loose'>
                        <p className='px-4'>{intl.formatMessage({ id: "footerOfficeTehran" })}: {intl.formatMessage({ id: "footerPhoneTehran" })}</p>
                        <p className='px-4'>{intl.formatMessage({ id: "footerOfficeEsfahan" })}: {intl.formatMessage({ id: "footerPhoneEsfahan" })}</p>
                    </div>
                </div>

                <div className='flex flex-row justify-start items-center mb-6'>
                    <img src={emailIcon} className='w-10 h-8' />
                    <span className='px-4'>
                        &nbsp; {intl.formatMessage({ id: "email" })}
                    </span>
                    <span className='px-4'>info@rahestan.com</span>
                </div>
            </div>
        </div>
    )
}

export default Contact