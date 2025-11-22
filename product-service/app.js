const express = require('express');
const cors = require('cors');
const app = express();

// Aktifkan CORS untuk semua origin (agar Flutter bisa akses)
app.use(cors()); // ⬅️ Tambahkan ini
app.use(express.json());

//Dummy data products
const products = [
    { id: 1, name: 'iPhone 17 Pro Max', price: 100, Description: 'This is iPhone 17 Pro Max' },
    { id: 2, name: 'Microwave', price: 150, Description: 'This is Microwave' },
    { id: 3, name: 'Laptop Macbook', price: 200, Description: 'This is Laptop Macbook' },
];

app.get('/', (req, res) => {
    res.send('Product Service is running!');
});

//Endpoint untuk mendapatkan semua produk
app.get('/products', (req, res) => {
    res.json(products);
});

//Endpoint untuk mendapatkan detail produk berdasarkan ID
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Menjalankan server pada port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Product Service is running on port ${PORT}`);
});

// Cara Kedua
// app.listen(3000, () => {
//     console.log('Product Service is running on port 3000');
// });