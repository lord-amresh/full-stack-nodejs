//hami yah database connection ko code/logic lexam

const {Sequilize,DataTypes} = require("sequelize")

//const bookModel = require("./Models/book.model")

 const sequelize = new Sequelize
 ("postgresql://postgres.bpurtwvuskghtnohkvwf:rabindra2229@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

 sequelize.authenticate()
 .then(()=>{
    console.log("Authenticated vayo, connected vayo!!")
 })
 .catch((err)=>{
    console.log("Error aayo" + err)
 })


 const db = {}
 db.Sequelize = Sequelize
 db.sequelize = sequelize

 db.books = require("./Models/book.model")(sequelize,DataTypes)


 //migrate code ho yo chai 
 // need to pdate and complete this

 sequelize.sync({force : false}).then(()=>{
    console.log("Migrate vayo hai ta")
})

 module.exports = db