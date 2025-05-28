const express = require("express") // express require gareko
const app = express()  //express lai trigger gareko

require("./database/db.connection")

//let app = require("express")()
app.get("/books",function(req,res){
    //logic to fetch books from database
    users.findall()
    res.json({
        message :"books fetched successfully"
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
