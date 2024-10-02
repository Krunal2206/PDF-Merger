import React from 'react'

const Alert = ({ message, type }) => {
    let alertStyle;

    // Set alert style based on type (e.g., error, success)
    switch (type) {
        case "error":
            alertStyle = "bg-red-100 border-red-400 text-red-700";
            break;
        case "success":
            alertStyle = "bg-green-100 border-green-400 text-green-700";
            break;
        case "warning":
            alertStyle = "bg-yellow-100 border-yellow-400 text-yellow-700";
            break;
        default:
            alertStyle = "bg-gray-100 border-gray-400 text-gray-700";
    }

    return (
        <div
            className={`${alertStyle} border-l-4 p-4 rounded-lg mb-4`}
            role="alert"
        >
            <p className="font-bold">{message}</p>
        </div>
    )
}

export default Alert
