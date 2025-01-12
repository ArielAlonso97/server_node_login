
import express from 'express';
const app = express()
import { connectDB } from "./config/db.js"
import productRouter from "./routes/productsRouter.js"



connectDB()

app.get("/",(req,res)=>{
    res.json({"hello":'Hello word!'})
})

app.use('/api/products',productRouter)

// Ejecutar el servidor local solo si no estamos en Vercel
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  }

export default app;