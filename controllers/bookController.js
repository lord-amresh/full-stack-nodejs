const { books } = require("../database/db.connection")


exports.fetchBooks = async function(req,res){
    //logic to fetch books from database

    const datas = await books.findAll() // select * from books, for mongodb- books.find(), alaways returns array
    res.json({
        message :"books fetched successfully",
        datas
    })
}

exports.addBook = async function(req,res){
    //logic to add book to database goes here..
    //console.log(req.body)
    //const bookName = req.body.bookName
    //const bookPrice = req.body.bookPrice

    const {bookName,bookPrice,bookAuthor,bookGenre} = req.body
    await books.create({
        bookName,
        bookPrice,
        bookAuthor,
        bookGenre
        // columnName : Value
    })

    res.json({
        message : "Book added  successfully"
    })
}

exports.deleteBook = async function(req,res){
    //logic to delete book to database goes here..
    const id = req.params.id

    await books.destroy({
        where : {
            id
        }
    })//delete from books where id = id.
    res.json({
        message : "Book deleted successfully"
    })
}

exports.editBook = async function(req,res){
    //logic to update book to database goes here..
//kun id ko chai edit garne tyo id linu paryo
    const id = req.params.id
    //k k update garne ta..
    const {bookName,bookPrice,bookAuthor,bookGenre} = req.body

    await books.update({bookName,bookPrice,bookAuthor,bookGenre},{
        where : {
            id : id
        }
    })
    //books.findByIdAndUpdate(id,{})

    res.json({
        message : "Book edited successfully"
    })
}

exports.singleFetchBook = async function(req,res){
    // first capture what id he/she is sending
    const id = req.params.id
    const datas = await books.findByPk(id) //always returns object mongodb ->findById 
    res.json({
        message : "Single Book fetched successfully",
        datas,
    })
}


// module.exports = {fetchBooks,addBook,deleteBook,editBook} yesari pani
// export garna milchha hai