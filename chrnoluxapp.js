const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/chronolux-app';
mongoose.connect(mongoURI)
    .then(() => console.log('Successfully connected to MongoDB.'))
    .catch(err => console.error('Database connection failed:', err));

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

app.post('/api/register', async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const accountCheck = await User.findOne({ email });
        if (accountCheck) return res.status(400).json({ message: "Email already exists." });
        const newCollector = new User({ fullName, email, password });
        await newCollector.save();
        res.status(201).json({ message: "Collector Profile established successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server registry error encountered." });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const identityMatch = await User.findOne({ email, password });
        if (!identityMatch) return res.status(401).json({ message: "Invalid email or incorrect password." });
        res.status(200).json({ message: `Portal approved! Welcome back ${identityMatch.fullName}.` });
    } catch (error) {
        res.status(500).json({ message: "Server login error encountered." });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));