const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,   
    },
    description: {
        type: String,
        required: false
    },
    taste:{
        type: String,
        enum: ['sweet', 'sour', 'spicy', 'bitter', 'salty']
    },
    is_drink:{
        type:Boolean,
        default: false
    },
    ingredients: {
        type: String,
        default: []
    },
    num_sales:{
        type: Number,
        default:0,
    }
});

const Menu = mongoose.model('menu', menuSchema);

module.exports = Menu;
//export default Menu;