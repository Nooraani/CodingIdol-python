import React from 'react'

const InvoiceForm = ({ItemsDescription,setItemsDescription,quantity,setQuantity,Price,setPrice,Amount,setAmount}) => {
    const CalculateAmount=(Amount)=>{
      setAmount(quantity*Price)
    }
  return (
    <>
       <div className='flex flex-col'>
                                    <label htmlFor='Name'>Enter Item Description</label>
                                    <input type='text' name='ItemDescription' id='Description'
                                        placeholder='enter your Item'
                                        autoComplete='off'
                                        value={ItemsDescription}
                                        onChange={(e) => setItemsDescription(e.target.value)}

                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='Name'>Enter Quantity</label>
                                    <input type='number' name='Quantity' id='Quantity'
                                        placeholder='enter your Quantity'
                                        autoComplete='off'
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}

                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='Name'>item Price</label>
                                     <p>{Price}</p>

      
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='Name'> Amount</label>
                                     <p>{CalculateAmount(Amount)}</p>

      
                                </div>
    </>
  )
}

export default InvoiceForm
