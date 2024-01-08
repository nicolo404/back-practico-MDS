const { Schema, model } = require("mongoose")

const SchemaUser = Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
})

module.exports = model("User", SchemaUser);