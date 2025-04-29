const express =  require('express')  // express require gareko
const app = express()       //express lai trigger gareko

require("./Database/connection")


// let app = require("express0")()
app.get("/books",function(req,res){
    // logic to fetch books from database

    res.json({
        message : "books fetched successfully"
    })
})

app.post("/books",function(req,res){
    // logic to add book to database goe here

    res.json({
        message : "Book added successfully"
    })
})


app.delete("/books/:id",function(req,res){
    // logic to delete book

    res.json({
        message : "Book deleted successfully"
    })
})


app.patch("/books/:id",function(req,res){
    // logic to update book

    res.json({
        message : "Book updated successfully"
    })
})



app.listen(4000,function(){
    console.log("Project/server/backend has started at port 4000")
})

