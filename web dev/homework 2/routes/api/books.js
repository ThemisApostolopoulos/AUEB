const express = require('express');
const router = express.Router();
const books = require('../../Books');

//gets books
//we have the path from the app.use('/api/books', require('./routes/api/books'));
router.get('/', (req,res)=>{
    res.json(books);
})

//gets specific book with an id that exists
router.get('/:id', (req, res) => {
    const found = books.some(books=>books.id === parseInt(req.params.id));
  
    if (found) {
      res.json(books.filter(books => books.id === parseInt(req.params.id)));
    } else {
      res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
  });

  //

  module.exports = router;