import {Product} from '../model/products_model.js'

export async function getAllProducts(req,res) {
    try{
        const productsa = await Product.find()
        res.json(productsa)
        console.log(productsa)
    }catch(e){
        const message = res.text
        res.status(500).json({message:'Error al obtener productos', message})
    }
    
}