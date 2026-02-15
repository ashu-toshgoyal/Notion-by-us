// const { title } = require('node:process')
const Note = require('../model/Notes')

// Create Notes
exports.createnote = async (req,res) =>{
    try {
        const note = new Note({
            title: req.body.title,
            content: req.body.content,
        });

        await note.save();
        req.json(note);

    }
    catch(error){
        res.status(500).json({err:error.message})
    }
    
}

//Show Notes
exports.shownote = async(req,res) =>{
    try{
        const note = new Note();            //Create note object
        note.find().sort({createdAt: -1}); //search note then arrange in Newsest to Oldest
        res.json(note); // server send notes back to frontend in JSON format
    }
    /* Front end will recieve data like 
    [{"title":    ,"Content":   }] */
    catch(error){
        res.status(500).json({err:error.message});
    }
}

exports.deleltenotes = async(req,res) =>{
    try{
        await Note.findbyIdandDelete(req.params.id);
        res.json({message:"Deleted"});

    }
    catch(error){
        res.status(500).json({err:error.message});
    }
}