const Car = require("./carLib");

// GET /cars
const getAllCars = (req, res) => {
  const cars = Car.getAll();
  res.json(cars);
};

// POST /cars
const createCar = (req, res) => {
  const { model, color, age } = req.body;

  const newCar = Car.addOne(model, color, age);

  if (newCar) {
    res.json(newCar);
  } else {
    res.status(500).json({ message: "Failed to create car" });
  }
};

// GET /cars/:carId
const getCarById = (req, res) => {
  const carId = req.params.carId;
  const car = Car.findById(carId);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
};

// PUT /cars/:carId
const updateCar = (req, res) => {
  const carId = req.params.carId;

  const { model, color, age } = req.body;

  const updatedCar = Car.updateOneById(carId, { model, color, age });

  if (updatedCar) {
    res.json(updatedCar);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

// DELETE /cars/:carId
const deleteCar = (req, res) => {
  const carId = req.params.carId;

  const isDeleted = Car.deleteOneById(carId);

  if (isDeleted) {
    res.json({ message: "Car deleted successfully" });
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
