import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://jhon437699:6OdssDZRny9qbD6v@cluster0.t8ccsfn.mongodb.net/")
    .then(db => console.log("Db is conected"))
    .catch(error => console(error))