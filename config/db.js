
import mongoose from 'mongoose';
const mongoURI = 'mongodb+srv://corvusteeme:q35rRTu2WDjVx9sp@nodetest.citho.mongodb.net/node-login?retryWrites=true&w=majority';

export const connectDB = async () => {
    try {
      // Elimina 'useNewUrlParser' y 'useUnifiedTopology'
      await mongoose.connect(mongoURI);
      console.log('Conexión a MongoDB exitosa');
    } catch (error) {
      console.error('Error de conexión a MongoDB:', error);
      process.exit(1);
    }
  };




