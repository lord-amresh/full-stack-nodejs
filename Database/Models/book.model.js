
//books, bookName, bookPrice, bookauthor, bookgenre

const bookModel = (sequilize,DataTypes)=>{
    const Book = Sequelize.define("book",{
        bookName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        bookPrice : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        bookAuthor : {
            type : DataTypes.STRING,
            allowNull : false
        },
        bookGenre : {
            type : DataTypes.STRING
        }
    }

    )
    return Book
}

module.exports = bookModel