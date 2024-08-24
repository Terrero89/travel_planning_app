import React from 'react'
import Link from 'next/dist/client/link'
interface Props { }

const NavLinks = () => {
    return (<div className="flex justify-center mx-5 text-1xl text-gray-100">
        <Link className="mx-1" href='/'>Home</Link>
        <Link className="mx-1" href='/stories'>Destinations</Link>
        <Link className="mx-1" href='stats'>Cities</Link>
        <Link className="mx-1" href='/dashboard'>Dashboard</Link>


    </div>
    )
}

export default NavLinks