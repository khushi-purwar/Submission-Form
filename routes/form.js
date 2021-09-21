const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// model
const formModel = require('../models/form') 

// storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname) , 'public/uploads'))
    },
    filename: function (req, file, cb) {
      const name = req.body.fullname;
      cb(null, file.originalname)
    }
  })
  
const upload = multer({ storage })

router.get('/form', (req,res)=>{
    res.render('form');
})

router.post('/form', upload.single('file') ,async(req, res) => {

    try{   
      
      const formData = await formModel.create({
        ... req.body,
       file : req.file.filename
      })
    res.render('success');  
    }catch (error){
      console.log("Something Went Wrong");
      console.log(error);
    }  
})


module.exports = router;