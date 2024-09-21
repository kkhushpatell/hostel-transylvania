'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Nav = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Only set client-side logic after mounting
    }, []);

    if (!isClient) {
        return null; // Avoid mismatched rendering on the server and client
    }

    return (
        <nav className='flex-between w-full pt-6 pl-20 pr-20 bg-gray-100 transparent border-black'>
            <Link href="/" className='flex gap-2 flex-center'>
                <Image
                    src="/images/newHostel.png"
                    width={60}
                    height={60}
                    className="object-contain"
                />
                <p className='black_gradient text-xl font-bold font-sans hover:text-2xl'>HostelTransylvania</p>
            </Link>
            <div className='flex relative'>
                <button type="button" className='boutline_btn' onClick={() => setToggleDropdown((prev) => !prev)}>
                    Login
                </button>
                {toggleDropdown && (
                    <div className='dropdown'>
                        <Link href="/studentLogin" className='dropdown_link' onClick={() => setToggleDropdown(false)}>
                            Student
                        </Link>
                        <Link href="/wardenLogin" className='dropdown_link' onClick={() => setToggleDropdown(false)}>
                            Warden
                        </Link>
                        <Link href="/staffLogin" className='dropdown_link' onClick={() => setToggleDropdown(false)}>
                            Staff
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;
