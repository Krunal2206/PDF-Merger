import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 px-8 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center mb-4 sm:mb-0">
                    <img src={logo} alt="PDF Merger Logo" className="w-8 h-8 mr-2" />
                    <h1 className="text-lg font-semibold">PDF Merger</h1>
                </div>

                <div className="text-center sm:text-right">
                    <p className="text-sm">© {new Date().getFullYear()} Krunal Thakar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
