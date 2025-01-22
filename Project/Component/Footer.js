import React from 'react'

const Footer = ({name,address,Email,Phone,Amount}) => {
    return (
        <>
            <footer>
                <ul className='flex flex-wrap items-center justify-between'>
                    <li>Your Name :{name}</li>
                    <li>Your Email : {Email}</li>
                    <li>Address : {address}</li>
                    <li>Your Phone no :{Phone}</li>
                    <li>Total Amount :{Amount}</li>

                </ul>
            </footer>
        </>
    )
}

export default Footer
