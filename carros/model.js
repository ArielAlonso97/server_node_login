import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
    model: { type: String, required: true },
    color: { type: String, required: true },
    year: { type: Number, required: true }
});

const Car = mongoose.model('Car', carSchema);

export  {Car};
