const express = require('express');

const app = express();
const routes = express.Router();

const controller = require("../controller/NotesControl")

//Get all notes
routes.get('/',controller.shownote);

//Create a note
routes.post('/',controller.createnote);

//Delete a Note
routes.delete('/:id',controller.deleltenotes)

module.exports = routes;
