import React from 'react'

const MainDetails = ({name,address}) => {
    return (
        <>
            <section className='flex flex-col items-end justify-end '>
                <h2 className='text-xl uppercase font-bold md:text-4xl'>Noorani </h2>
                <p>Hyderabad</p>
            </section>
        </>
    )
}

export default MainDetails
