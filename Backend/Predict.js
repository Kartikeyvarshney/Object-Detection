const tf = require("@tensorflow/tfjs-node");
const cocoSsd = require("@tensorflow-models/coco-ssd");
const fs = require("fs");

async function Predict(image) {
    
  try {
    // Load the COCO-SSD model
    const model = await cocoSsd.load();
    // Load and preprocess the image (replace 'imagePath' with the path to your image)
    const imageData = fs.readFileSync(image);
    const imageTensor = tf.node.decodeImage(imageData);

    // Run inference to detect objects
    const predictions = await model.detect(imageTensor);

    // Process predictions
    console.log(predictions[0].class)
    return predictions[0].class
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = Predict;
