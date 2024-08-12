const express = require("express");
//const router = express.Router();
const user = express();


const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

//middleware
user.use(bodyParser.urlencoded({ extended:true }));
user.use(express.static(path.resolve(__dirname, 'public')));

var storage = multer.diskStorage({
    destination:(req,file, cb) => {
        cb(null,'./public/uploads')
    },
    filename:(req, file, cb) => {
        cb(null,file.originalname)
    }
});

const upload = multer({storage: storage});
const userController = require('../controller/userController');

user.post('/importUser',upload.single('file'),userController.importUser);

module.exports = user;





//module.exports = {router}