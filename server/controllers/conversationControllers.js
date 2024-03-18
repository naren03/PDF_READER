const multer = require('multer');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const Conversation = require('../models/conversation');

const axios = require('axios');
const FormData = require('form-data');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = './uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Preserve the original filename
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
});

const uploadFile = async (req, res) => {
  try {
    const files = req.files;
    if (!files || files.length !== 1) {
      return res.status(400).json({ message: 'Only single file allowed !!!' });
    }

    const file = files[0];
    
    // Check if a Conversation with the same PDF name exists
    const existingConversation = await Conversation.findOne({ name: file.originalname });
    if (existingConversation) {
      return res.status(400).json({ message: 'File with the same name already exists !!!' });
    }

    // If no Conversation exists, create one
    const conversation = new Conversation({
      name: file.originalname,
    });

    // Save the Conversation
    await conversation.save();

    file.filename  = conversation._id.toString()+ ".pdf"
    // Send file to Flask server
    await sendToFlaskServer(file);

    res.status(201).json({ message: 'File uploaded successfully !!!' });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const editFile = async (req, res) => {
    try {
      const conversationId = req.params.id;
      const newName = req.body.newName;
  
      // Check if the Conversation exists
      const conversation = await Conversation.findById(conversationId);
      if (!conversation) {
        return res.status(404).json({ message: 'PDF not found' });
      }
  
      // Get the current name of the PDF
      // const currentName = conversation.name;
      const currentName =  conversation.name.endsWith('.pdf') ? conversation.name : conversation.name + '.pdf';
      const newFileName = newName.endsWith('.pdf') ? newName : newName + '.pdf';
      
  
      // Update the name of the PDF in the uploads folder
      const oldFilePath = path.join('./uploads', currentName);
      const newFilePath = path.join('./uploads', newFileName);
      // console.log(oldFilePath,newFilePath)
      await fsPromises.rename(oldFilePath, newFilePath);
  
      // Update the name of the PDF in the database
      conversation.name = newName;
      await conversation.save();
  
      res.status(200).json({ message: 'PDF name updated successfully' });
    } catch (error) {
      console.error('Error updating PDF name:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

const deleteFile =async (req, res) => {
    try {
      const conversationId = req.params.id;
  
      // Check if the Conversation exists
      const conversation = await Conversation.findById(conversationId);
      if (!conversation) {
        return res.status(404).json({ message: 'PDF not found' });
      }
  
      // Delete the file
      const filePath = path.join('./uploads', conversation.name.endsWith('.pdf') ? conversation.name : conversation.name + '.pdf');
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
  
      // Delete the Conversation
      await Conversation.findByIdAndDelete(conversationId);

      // Call Flask endpoint to delete folder and files
        const flaskDeleteEndpoint = `${process.env.LLM_SERVER_IP}/delete_folder/${conversationId}`;
        await axios.delete(flaskDeleteEndpoint);
  
      res.status(200).json({ message: 'PDF deleted successfully' });
    } catch (error) {
      console.error('Error deleting PDF:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }


const sendToFlaskServer = async (file) => {
    try {
      const formData = new FormData();
      formData.append('pdf_files', fs.createReadStream(file.path), {
        filename: file.filename
      });
  
      const response = await axios.post(`${process.env.LLM_SERVER_IP}/upload_pdf`, formData, {
        headers: {
          ...formData.getHeaders()
        }
      });
  
      return response.data;
    } catch (error) {
      console.error('Error uploading PDF file to Flask:', error);
      throw error;
    }
  };
  
module.exports = { upload, uploadFile , editFile ,deleteFile};