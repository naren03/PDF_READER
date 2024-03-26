const express = require('express');
const router = express.Router();
const { uploadFile, upload ,editFile, deleteFile, getAllPdfs} = require('../controllers/conversationControllers');

router.post('/upload', upload.array('pdf'), uploadFile);

// Route to edit name of pdf
router.put('/edit/:id', editFile);

// Route to delete pdf
router.delete('/delete/:id', deleteFile);

// Route to get all pdf

router.get("/get-all-pdfs", getAllPdfs);

module.exports = router;