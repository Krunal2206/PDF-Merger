import React from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'

const FileInput = ({ selectedFiles, onFileChange }) => {
    return (
        <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center">
            {!selectedFiles || selectedFiles.length === 0 ? (
                <>
                    <input
                        type="file"
                        multiple
                        onChange={onFileChange}
                        accept="application/pdf"
                        className="hidden"
                        id="file-upload"
                    />

                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer inline-block w-full"
                    >
                        <div className="flex flex-col items-center justify-center h-16 border-dashed border-2 border-gray-300 rounded-lg relative group">
                            <FaCloudUploadAlt className="text-6xl text-orange-500" />

                            <div className="opacity-0 group-hover:opacity-100 absolute text-sm bg-gray-700 text-white rounded shadow-lg px-2 py-1 transition-opacity duration-300 bottom-full mb-1">
                                Click to upload your PDF files
                                <svg className="absolute text-gray-700 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
                                    <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
                                </svg>
                            </div>
                        </div>
                    </label>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-16 border-dashed border-2 border-gray-300 rounded-lg text-gray-600">
                    <p>{selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''} selected</p>
                </div>
            )}

            <p className="text-sm text-red-500 mt-2">
                You can upload up to 5 files at once, and each file must be less than 5 MB.
            </p>
        </div>
    )
}

export default FileInput
