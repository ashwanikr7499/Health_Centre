module.exports = (app) => {
  const stock_medicines = require("../controllers/stock_medicine.controller.js");

  var router = require("express").Router();

  // Create a new stock_Medicine
  router.post("/", stock_medicines.create);

  // Retrieve all Medicines
  router.get("/", stock_medicines.findAll);



  // Retrieve a single stock_Medicine with id
  router.get("/:id", stock_medicines.findOne);

  // Update a stock_Medicine with id
  router.put("/:id", stock_medicines.update);

  // Delete a stock_Medicine with id
  router.delete("/:id", stock_medicines.delete);

  // Delete all Medicines
  router.delete("/", stock_medicines.deleteAll);

  app.use("/api/stock_medicines", router);
};
