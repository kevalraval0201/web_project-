const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const db = 'mongodb+srv://kevalraval212:c9nRTCsTcNeG9i7A@marketplace.gclttxp.mongodb.net/MarketPlace?retryWrites=true&w=majority&appName=Marketplace';
;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/api', productRoutes);
app.get('*', (req, res) => {
    res.status(200).json({ message: 'Welcome To Marketplace' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});