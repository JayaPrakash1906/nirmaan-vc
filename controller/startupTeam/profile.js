const multer = require('multer');
const fs = require('fs');

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Route to handle file uploads
app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  // Read the file into a buffer
  const fileBuffer = fs.readFileSync(file.path);

  try {
    // Insert the file into the PostgreSQL database
    const client = await pool.connect();
    const query = 'INSERT INTO pdf_documents (filename, data) VALUES ($1, $2) RETURNING id';
    const values = [file.originalname, fileBuffer];
    const result = await client.query(query, values);
    client.release();

    // Delete the file from the local file system
    fs.unlinkSync(file.path);

    res.send(`File uploaded successfully with ID: ${result.rows[0].id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error uploading file.');
  }
});