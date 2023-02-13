const express = require('express')

const router = express.Router()

const Collection = require('../models/Collections');


router.get('/', (req, res) => {
    res.send("Hello")
})

// Create a new collection
router.post('/collections', async (req, res) => {
    const { image, title, description, link } = req.body;
    const newCollection = new Collection({ image, title, description, link });
    await newCollection.save();
    res.status(201).send();
});

// Get all collections
router.get('/collections', async (req, res) => {
    const collections = await Collection.find();
    res.send(collections);
});

// Get a single collection by ID
router.get('/collections/:id', async (req, res) => {
    const { id } = req.params;
    const collection = await Collection.findById(id);
    if (!collection) return res.status(404).send();
    res.send(collection);
});

// Update a collection by ID
router.put('/collections/:id', async (req, res) => {
    const { id } = req.params;
    const collection = await Collection.findByIdAndUpdate(id, req.body, { new: true });
    if (!collection) return res.status(404).send();
    res.send(collection);
});

// Delete a collection by ID
router.delete('/collections/:id', async (req, res) => {
    const { id } = req.params;
    const collection = await Collection.findByIdAndDelete(id);
    if (!collection) return res.status(404).send();
    res.send();
});


const validCredentials = [
    { username: 'vicky', password: 'Vinayaka06@' },
    { username: 'nanna', password: 'Deepika06@' },
    { username: 'cookie', password: 'Cookie06@' },
  ];
  
  router.post('/user/authenticate', (req, res) => {
    const { username, password } = req.body;
    const match = validCredentials.find(cred => cred.username === username && cred.password === password);
    if (match) {
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  });


module.exports = router