import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header className="w-full bg-white shadow-md py-4 px-4 sm:px-8 flex items-center sticky top-0">
            <div className="flex items-center">
                <img src={logo} alt="PDF Merger Logo" className="w-8 h-8 mr-2" />
                <h1 className="text-lg font-semibold">PDF Merger</h1>
            </div>
        </header>
    )
}

export default Header
