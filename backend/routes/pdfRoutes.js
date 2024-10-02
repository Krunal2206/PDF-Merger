const express = require('express');
const upload = require('../middleware/upload');
const pdfController = require('../controllers/pdfController');

const router = express.Router();

// Route to merge PDFs
router.post('/merge', upload.array('pdfs', 5), pdfController.mergePDFs); // Limit to 5 files

module.exports = router;