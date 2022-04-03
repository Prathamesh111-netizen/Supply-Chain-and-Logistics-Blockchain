import mongoose from "mongoose";

const schema = new mongoose.Schema({
     From : String,
     to : {type : String, default : 'self'}, 
     Amount : {type : String, default : '0'}, 
     Details : String,
     timestamp: { type: Date, default: Date.now}
});

const model = mongoose.model('userTransactions', schema);

export default model;