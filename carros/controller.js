import { Car } from "./model.js";

export async function getAllCars(req,res) {
    try {
        const cars = await Car.find()
        res.json(cars)
        console.log(cars)
    } catch (error) {
        console.log("Error a obtener los carros: ",error.message)
    }
}

export async function insertCar(req, res) {
    try {
        const { model, color, year } = req.body; // Accediendo a los datos del cuerpo de la solicitud

        // Crear un nuevo coche en la base de datos
        const car = await Car.create({
            model,
            color,
            year
        });

        res.status(201).json({
            message: "Carro insertado con éxito",
            car: car
        });
    } catch (error) {
        console.log("Error al insertar carro: ", error.message);
        res.status(500).json({
            message: "Error al insertar carro",
            error: error.message
        });
    }
}