
import mongoose from 'mongoose';
const mongoURI = 'mongodb+srv://corvusteeme:q35rRTu2WDjVx9sp@nodetest.citho.mongodb.net/node-login?retryWrites=true&w=majority';

export async function connectDB (params) {
    try{
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conexión a MongoDB exitosa');
    }catch(e){
        console.error('Error de conexión a MongoDB:', err);
    }
}





