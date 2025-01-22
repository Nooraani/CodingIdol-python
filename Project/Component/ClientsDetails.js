import React from 'react'

const ClientsDetails = ({name,address}) => {
  return (
    <>
      <section className='mt-5'>
                    <h2 className='text-xl uppercase'>{name} </h2>
                    <h2>{address} </h2>

                </section>
    </>
  )
}

export default ClientsDetails
