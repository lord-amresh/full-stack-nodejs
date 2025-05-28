
//hami yaha database connection ko code/logic yaha lekhchhau
const {Sequelize,DataTypes} = require("sequelize")

//const bookmodel = require("./models/db.book.model")

const sequelize= new Sequelize(process.env.CS)

sequelize.authenticate()
.then(()=>{
    console.log("Authenticated Bhayo, connected vayo !!")
})
.catch((err)=>{
    console.log("Error aayo + err")
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize 

db.books = require("./models/db.book.model")(sequelize,DataTypes)

// migrate code ho yo chai
sequelize.sync({alter : false}).then(()=>{
    console.log("Migrate vayo hai ta")
})

module.exports = db

