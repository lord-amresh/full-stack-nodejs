

const {sequilize,DataTypes, Sequelize} = require('sequelize')



 const sequelize = new Sequelize("postgresql://postgres.bpurtwvuskghtnohkvwf:rabindra2229@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")


 sequelize.authenticate()
 .then(()=>{
    console.log("Authenticated vayo, connected vayo")
 })
 .catch((err)=>{
    console.log("Error aayo" + err)
 })


 const db = {}
 db.Sequelize = Sequelize
 db.sequilize = sequilize

 module.exports = db