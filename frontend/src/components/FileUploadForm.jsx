import React, { useState } from 'react'
import Alert from './Alert';
import FileInput from './FileInput';
import { validateFiles } from '../utils/validateFiles';

const FileUploadForm = () => {

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [alert, setAlert] = useState({ message: "", type: "" });

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const error = validateFiles(files);

        if (error) {
            setAlert({ message: error, type: "error" });
            setSelectedFiles([]);
            return;
        }

        setSelectedFiles(files);
        setAlert({ message: "", type: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (selectedFiles.length === 0) {
            setAlert({ message: "Please select PDF files to merge.", type: "error" });
            return;
        }

        const formData = new FormData();
        selectedFiles.forEach((file) => formData.append("pdfs", file));

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/merge`, {
                method: "POST",
                body: formData,
            })

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", "merged.pdf"); // Set download name
                document.body.appendChild(link);
                link.click();

                // Remove the link element after download
                link.remove();

                setSelectedFiles([]);
                setAlert({ message: "PDFs merged successfully!", type: "success" });
            } else {
                setSelectedFiles([]);
                setAlert({ message: "Failed to merge PDFs. Please try again.", type: "error" });
            }
        } catch (error) {
            console.error("Error merging PDFs:", error);
            setSelectedFiles([]);
            setAlert({ message: "Error merging PDFs.", type: "error" });
        }
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
            {alert.message && <Alert message={alert.message} type={alert.type} />}

            <form onSubmit={handleSubmit} className="space-y-6">
                <FileInput selectedFiles={selectedFiles} onFileChange={handleFileChange} />

                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
                >
                    Merge PDFs
                </button>
            </form>
        </div>
    )
}

export default FileUploadForm
