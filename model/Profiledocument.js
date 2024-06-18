const client = require('../utils/conn');
const fileBuffer = fs.readFileSync(file.path);
({
try {
  
  const query("INSERT INTO pdf_documents (filename, data) VALUES ($1, $2)" ,RETURNING id'values = [file.originalname, fileBuffer];
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