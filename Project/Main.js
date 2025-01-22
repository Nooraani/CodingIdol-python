import React, { useState } from 'react'
import Notes from './Component/Notes'
import Footer from './Component/Footer'
import Table from './Component/Table'
import Header from './Component/Header'
import MainDetails from './Component/MainDetails'
import ClientsDetails from './Component/ClientsDetails'
import Dates from './Component/Dates'
import InvoiceForm from './Component/InvoiceForm'

const Main = () => {
    const [ShowInvoice, setShowInovice] = useState(false)
    const [name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [Phone, setPhone] = useState("")

    const [ItemsDescription, setItemsDescription] = useState("")
    const [quantity, setQuantity] = useState("")
    const [Price, setPrice] = useState(40)
    const [Amount, setAmount] = useState(100)

    return (
        <>
            <main className='m-5 p-5 lg:max-w-xl lg:mx-auto bg-white rounded shadow'>

                {ShowInvoice ? (
                    <div>
                        <Header />

                        <MainDetails  />
                        

                        <ClientsDetails name={name} address={address} />

                        <Dates />


                        <Table ItemDescription={ItemsDescription} Quantity={quantity} Price={Price} Amount={Amount} />




                        <Notes />

                   <hr></hr>

                        <Footer name={name} address={address} Email={Email} Phone={Phone} Amount={Amount} />


                        <button onClick={() => setShowInovice(false)} className='mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 boder-blue-500 hover:bg-transparent hover:text-blue-500 '>Edit information</button>
                    </div>
                ) : (
                    <>
                        <div className='flex flex-col justify-center'>
                            <article className='md:grid grid-cols-2 gap-6'>
                                <div className='flex flex-col'>
                                    <label htmlFor='Name'>Enter your Full Name</label>
                                    <input type='text' name='text' id='text'
                                        placeholder='enter your Name'
                                        autoComplete='off'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}

                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='Name'>Enter Email</label>
                                    <input type='email' name='Email' id='text'
                                        placeholder='enter your Email'
                                        autoComplete='off'
                                        value={Email}
                                        onChange={(e) => setEmail(e.target.value)}

                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='Name'>Enter Address</label>
                                    <input type='text' name='Address' id='text'
                                        placeholder='enter your Address'
                                        autoComplete='off'
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}

                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='Name'>Enter Phone</label>
                                    <input type='number' name='Phone' id='text'
                                        placeholder='enter your Phone'
                                        autoComplete='off'
                                        value={Phone}
                                        onChange={(e) => setPhone(e.target.value)}

                                    />
                                </div>


                          <InvoiceForm Amount={Amount} setAmount={setAmount} ItemsDescription={ItemsDescription} setItemsDescription={setItemsDescription} quantity={quantity} setQuantity={setQuantity}  Price={Price} setPrice={setPrice}  />

                
                            </article>

                            <button
                                onClick={() => setShowInovice(true)}
                                className=' bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 boder-blue-500 hover:bg-transparent hover:text-blue-500 '>See Invoice</button>

                        </div>

                    </>

                )}
            </main>
        </>
    )
}

export default Main
