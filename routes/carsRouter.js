import { Router } from 'express';
const carsRouter = Router();
import { getAllCars,insertCar } from '../carros/controller.js';
// Rutas de usuario
carsRouter.get('/', getAllCars);
carsRouter.post('/',insertCar)



export default carsRouter