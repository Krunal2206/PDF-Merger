import React from 'react'
import FileUploadForm from './FileUploadForm'

const Main = () => {
    return (
        <main className="flex flex-col items-center justify-center py-12 px-6 sm:px-12 lg:px-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Merge your PDFs with Ease</h2>

            <p className="text-lg text-gray-600 mb-8">
                Combine multiple PDF files into a single document in just a few clicks.
            </p>

            <FileUploadForm />
        </main>
    )
}

export default Main
