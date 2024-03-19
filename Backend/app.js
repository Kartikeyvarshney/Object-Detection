const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const fs = require('fs-extra')
const cors = require('cors');

const predict = require('./Predict');

app.use(express.urlencoded({ extended: true }));
app.use(cors({origin:'http://localhost:5173'}));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.originalname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ storage: storage });

app.post('/predict', upload.single('image'), async (req, res) => {
//   if (!req.file) {
//     return res.status(404).send("No file received.");
//   }

  try {
    const response = await predict(req.file.path);
    console.log(response)
    res.send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
  finally{
    fs.emptyDir('./uploads')
    .then(()=>{
        console.log("Uploads folder is empty.")
    })
    .catch(err=>{
        console.log(err.message)
    })
  }
 
});

app.listen(8000, error => {
  if (error) {
    console.error('Error starting server:', error.message);
  } else {
    console.log('Server is online at https://localhost:8000');
  }
});
