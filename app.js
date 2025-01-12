const express = require("express")
const app = express()
const port = 300

app.get("/",(req,res)=>{
    res.json({"hello":'Hello word!'})
})


// Ejecutar el servidor local solo si no estamos en Vercel
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  }

module.exports = app;