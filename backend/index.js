const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve file statis dari dist React
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// API / Application Programming Interface
app.get('/Gifel', (req, res) => {
  res.json({ pesan: 'Halo Saya Gifel!' });
});

app.get('/Angellina', (req, res) => {
  res.json({ pesan: 'Halo Saya Angelina!'})
})

// Fallback semua request lain ke index.html (SPA / Single Page Application)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
