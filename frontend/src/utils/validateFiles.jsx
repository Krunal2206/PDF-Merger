const validateFiles = (files) => {
    if (files.length > 5) {
        return "You can only upload up to 5 files.";
    }

    const overSizeFiles = files.filter((file) => file.size > 5 * 1024 * 1024);
    if (overSizeFiles.length > 0) {
        return "Each file must be less than 5 MB.";
    }

    const nonPdfFiles = files.filter((file) => file.type !== "application/pdf");
    if (nonPdfFiles.length > 0) {
        return "Only PDF files are allowed.";
    }

    return null;
}

export { validateFiles };