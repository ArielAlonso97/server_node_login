import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define un esquema compatible con los documentos
const productSchema = new Schema({
  product_name: String,     // Nombre del producto
  quantity: Number,         // Cantidad
  price_per_kg: Number,     // Precio por kg
}, { collection: 'products' }); // Nombre exacto de la colección existente

// Crea el modelo basado en el esquema
const Product = mongoose.model('Product', productSchema);

export  {Product};
