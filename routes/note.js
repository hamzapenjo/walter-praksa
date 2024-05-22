const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/add-note', authMiddleware.authenticateUser, notesController.addNote);
router.put('/edit-note/:title', authMiddleware.authenticateUser, notesController.editNote);
router.delete('/delete-note/:title', authMiddleware.authenticateUser, notesController.deleteNote);
router.get('/get-note/:title', authMiddleware.authenticateUser, notesController.getNote);
router.get('/get-all-notes', authMiddleware.authenticateUser, notesController.getAllNotes);
router.get('/get-all-notes-company', authMiddleware.authenticateUser, notesController.getAllNotesCompany);

module.exports = router;
