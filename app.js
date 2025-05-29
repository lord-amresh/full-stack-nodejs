const express = require("express") // express require gareko
const { books } = require("./database/db.connection")
const app = express()  //express lai trigger gareko

require("./database/db.connection")

//let app = require("express")()
app.get("/books",async function(req,res){
    //logic to fetch books from database

    const datas = await books.findAll() // select * from books, for mongodb- books.find(), alaways returns array
    res.json({
        message :"books fetched successfully",
        datas
    })
})

app.post("/books",function(req,res){
    //logic to add book to database goes here..

    res.json({
        message : "Book added successfully"
    })
})

app.delete("/books/:id",function(req,res){
    //logic to delete book to database goes here..
    res.json({
        message : "Book deleted successfully"
    })
})
app.patch("/books/:id",function(req,res){
    //logic to update book to database goes here..
    res.json({
        message : "Book deleted successfully"
    })
})

app.listen(3000, function (){
    console.log("project/server/backend has started at port 3000")
})