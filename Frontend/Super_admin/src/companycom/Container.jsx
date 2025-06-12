import React from 'react'

export default function Container({ children }) {
    return (
        <div className='lg:w-[1260  px] w-full mx-auto'>
            {children}
        </div>
    )
}
