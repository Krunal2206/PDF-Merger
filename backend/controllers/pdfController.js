const path = require('path');
const fs = require('fs');

exports.mergePDFs = async (req, res) => {
    try {
        const { default: PDFMerger } = await import('pdf-merger-js');
        const merger = new PDFMerger();

        const files = req.files;

        if (!files || files.length === 0) {
            return res.status(400).send('No files uploaded.');
        }

        // Add each file to the merger
        for (let file of files) {
            await merger.add(path.join(__dirname, '../uploads', file.filename));
        }

        // Output merged PDF
        const outputFilePath = path.join(__dirname, '../uploads', `merged-${Date.now()}.pdf`);
        await merger.save(outputFilePath); // Save to file

        // Send the merged PDF back to the client
        res.download(outputFilePath, 'merged.pdf', (err) => {
            if (err) {
                console.error('Error during download:', err);
                return res.status(500).send('Error sending the file.');
            }

            try {
                for (let file of files) {
                    fs.unlinkSync(path.join(__dirname, '../uploads', file.filename)); // Delete individual files
                }
                fs.unlinkSync(outputFilePath);
            } catch (error) {
                console.error('Error deleting files:', error);
            }
        });

    } catch (error) {
        console.error('Error merging PDFs:', error);
        res.status(500).send('Error merging PDFs.');
    }
}