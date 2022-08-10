const path = require('path');
const express = require('express');
const { Dalle } = require('node-craiyon');

const app = express();
const dalle = new Dalle();

app.get('/generate', async (req, res) => {
    try {
        const keyword = req.query.keyword;
        const images = await dalle.generateImages(keyword);
        res.json(images);
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
});

const public_path = path.join(__dirname, 'build');
app.use(express.static(public_path));
app.get('/', (req, res) => {
    res.sendFile(path.join(public_path, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app is running on port ${port}.`));