import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { classifyImage } from './lib/classifier.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/classify', async (req, res) => {
  const data = req.body;
  const file = data.file;

  if (!file) {
    return res.status(400).json({ message: 'File not present in body' });
  }

  try {
    const response = await classifyImage(file);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: 'Error processing image', error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});