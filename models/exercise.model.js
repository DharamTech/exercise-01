const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
	username: { type: String, required: false },
	description: { type: String, required: false },
	duration: { type: Number, required: false },
	date: { type: Date, required: false },
}, {
	timestamps: false,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;