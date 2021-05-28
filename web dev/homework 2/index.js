const express = require('express');
const path = require('path');
const app = express();
const books = require('./models/bookdao');
var cors = require('cors');
app.use(cors());

app.use(express.json());
//const books = require('./Books');

//const logger = require('./middleware/logger')

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//middleware to log url
//app.use(logger);
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) =>{
//    let books = books2.findAllbooks()
//   res.render('books', {
//     books: books
//   })
// }
  
// );

//get request:returns all favourite books
app.get('/books', (req,res)=>{
        // res.json(books2.findAllBooks());
        // console.log(books2.findAllBooks());
        let books2 = books.findAllBooks();
        res.render('books', {
            books: books2
    })
})



//post requst:post(in simpler words add) a new book in the favourite books
app.post('/books', (req,res)=>{
    
    const newBook ={ 
        titleAuth: req.body.titleAuth,
        workid: parseInt(req.body.workid)
    }
    



    let booksList = books.findAllBooks();
    var found = false;
    booksList.forEach(book => {
        console.log(book.workid);
        if(newBook.workid === parseInt(book.workid)){
            found = true;
            console.log("you already have this book saved!")
            return res.status(404).json( {msg: 'Book already saved'});


        }
        
    });
    if(!found){
    console.log("added" + newBook.workid);
    booksList.push(newBook);
    res.json(booksList);
    }
    // console.log("added" + newBook.workid);
    // booksList.push(newBook);
    // res.json(booksList);

})




app.delete('/books/:id', (req,res)=>{
    console.log("delete " + req.params.id);
    //see if the book you want to delete exists in the favourite books list
    const found = books.findAllBooks().some(book => book.workid === parseInt(req.params.id));

    // console.log(books.findAllBooks()[0].workid ===  parseInt(req.params.id));
    // console.log(req.params.workid);
    console.log(found);
    // console.log(books.findAllBooks()[0].workid);

    //if it exists, delete it
    if(found){
        var updatedBooks = books.findAllBooks().filter(book =>book.workid !== parseInt(req.params.id));
        //set the new book list without the book ther user deleted
        books.setBooks(updatedBooks);
        console.log(books.findAllBooks());
        res.json({ 
            msg:"Book deleted"
        });
    }else{
        res.status(404).json( {msg: 'Book not found'});
    }  
})


const port = 5000;



app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

//books API routes
//app.use('/api/books', require('./routes/api/books'));

app.listen(port); 
